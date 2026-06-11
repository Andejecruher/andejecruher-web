---
title: "Arquitectura SaaS multi-tenant con Laravel: patrones y decisiones reales"
description: "Cómo diseñar e implementar una plataforma SaaS multi-tenant con Laravel desde cero, incluyendo estrategias de aislamiento de datos, gestión de planes y subdominios dinámicos."
pubDate: 2025-02-10
category: "SaaS Architecture"
tags: ["laravel", "saas", "multi-tenant", "architecture", "database", "php"]
image: "/images/blog/saas-multitenant.svg"
imageAlt: "Diagrama de una plataforma SaaS conectada a espacios aislados para múltiples tenants"
author: "Andejecruher"
status: "published"
featured: false
readingTime: 12
---

## El problema de multi-tenancy

Construir una aplicación SaaS que sirva a múltiples organizaciones simultáneamente con datos completamente aislados es uno de los desafíos más interesantes en backend development. La pregunta no es *si* lo vas a hacer, sino *cómo* vas a aislar los datos de cada tenant.

Hay tres estrategias principales, y cada una tiene sus propios trade-offs.

## Estrategia 1: Base de datos por tenant

Cada organización tiene su propia base de datos. Es el máximo aislamiento posible.

```php
// TenantDatabaseManager.php
class TenantDatabaseManager
{
    public function connect(Tenant $tenant): void
    {
        config([
            'database.connections.tenant' => [
                'driver'   => 'mysql',
                'host'     => env('DB_HOST'),
                'database' => "tenant_{$tenant->id}",
                'username' => env('DB_USERNAME'),
                'password' => env('DB_PASSWORD'),
            ],
        ]);

        DB::purge('tenant');
        DB::reconnect('tenant');
    }
}
```

**Pros:** aislamiento perfecto, cada tenant puede escalar independientemente, backups granulares.

**Contras:** gestión de migraciones compleja (N bases de datos), costo de infraestructura más alto, pooling de conexiones más difícil.

**Cuándo usarlo:** cuando el cliente lo requiere por compliance (HIPAA, GDPR stricto), o cuando los datos son extraordinariamente sensibles.

## Estrategia 2: Schema por tenant (PostgreSQL)

En PostgreSQL, podés usar schemas separados dentro de la misma base de datos.

```sql
-- Crear schema para nuevo tenant
CREATE SCHEMA tenant_abc123;
SET search_path TO tenant_abc123;

-- Las tablas se crean dentro del schema
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

En Laravel, podés cambiar el `search_path` dinámicamente:

```php
DB::statement("SET search_path TO tenant_{$tenant->slug}");
```

**Pros:** buen aislamiento, migraciones más manejables que DB-per-tenant, PostgreSQL lo soporta nativamente.

**Contras:** solo disponible en PostgreSQL, complejidad al hacer queries cross-tenant, índices no se comparten.

## Estrategia 3: Columna tenant_id (la más común)

Todas las organizaciones comparten las mismas tablas, con una columna `tenant_id` en cada tabla que tiene datos del tenant.

```php
// app/Models/BaseModel.php
abstract class BaseModel extends Model
{
    protected static function booted(): void
    {
        if (app()->bound('current.tenant')) {
            static::addGlobalScope('tenant', function (Builder $builder) {
                $builder->where('tenant_id', app('current.tenant')->id);
            });
        }
    }
}
```

Esta es la estrategia que usé en la mayoría de mis proyectos SaaS. Es la más simple de implementar y la que mejor escala en términos de infraestructura.

**La trampa principal**: olvidarte de agregar el global scope en algún modelo. Solución: hacer que todos tus modelos de negocio extiendan `BaseModel`, no el Model de Laravel directamente.

## Identificación de tenants: subdominios dinámicos

Una de las partes más interesantes es cómo identificar a qué tenant pertenece cada request. La forma más elegante es via subdominio:

```
acme.tuapp.com → tenant: acme
globex.tuapp.com → tenant: globex
```

El middleware de Laravel:

```php
// app/Http/Middleware/IdentifyTenant.php
class IdentifyTenant
{
    public function handle(Request $request, Closure $next): Response
    {
        $host = $request->getHost();
        $subdomain = explode('.', $host)[0];

        $tenant = Tenant::where('slug', $subdomain)
            ->where('is_active', true)
            ->firstOrFail();

        app()->instance('current.tenant', $tenant);

        return $next($request);
    }
}
```

En producción, el wildcard DNS `*.tuapp.com → tu-servidor` maneja todos los subdominios automáticamente.

## Gestión de planes y features flags

Para un SaaS real necesitás un sistema de planes. La implementación más limpia que encontré:

```php
// Trait HasPlanFeatures
trait HasPlanFeatures
{
    public function can(string $feature): bool
    {
        return $this->plan->features()->where('key', $feature)->exists();
    }

    public function within(string $limit): bool
    {
        $feature = $this->plan->features()->where('key', $limit)->first();
        if (!$feature) return false;

        return $this->getCurrentUsage($limit) < $feature->value;
    }
}

// Uso en cualquier controller
if (!$tenant->can('advanced_reports')) {
    abort(403, 'Your plan does not include advanced reports.');
}

if (!$tenant->within('max_users')) {
    abort(422, 'You have reached your user limit.');
}
```

## Migraciones en multi-tenant

El problema más grande operacionalmente: cómo ejecutar migraciones en todos los tenants sin downtime.

```php
// Artisan command: tenant:migrate
class MigrateAllTenants extends Command
{
    protected $signature = 'tenant:migrate {--tenant=} {--force}';

    public function handle(): void
    {
        $tenants = $this->option('tenant')
            ? Tenant::where('slug', $this->option('tenant'))->get()
            : Tenant::where('is_active', true)->get();

        $tenants->each(function (Tenant $tenant) {
            $this->info("Migrating tenant: {$tenant->name}");
            // Cambiar conexión y ejecutar migraciones
            app(TenantDatabaseManager::class)->connect($tenant);
            $this->call('migrate', ['--force' => $this->option('force')]);
        });
    }
}
```

## Conclusiones

Después de varios proyectos SaaS en producción, las lecciones más valiosas son:

1. **Empezar con `tenant_id` en tablas** — es la estrategia más pragmática en el 80% de los casos
2. **Los global scopes son tu red de seguridad** — usarlos consistentemente elimina la posibilidad de data leaks entre tenants
3. **Diseñar el sistema de planes desde el día 1** — cambiarlos en producción es caro
4. **Automatizar las migraciones de tenants** — hacer esto manual no escala

El repositorio con el código completo de un starter SaaS multi-tenant en Laravel está disponible en mi GitHub.
