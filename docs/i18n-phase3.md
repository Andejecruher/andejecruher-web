# i18n Fase 3 — Infraestructura base

Configuración mínima de i18n para Astro SSG. Sin cambios de rutas, sin migración masiva todavía.

## Estructura

```
src/i18n/
  config.ts          # Idiomas soportados, DEFAULT_LANG
  utils.ts           # getLang() + useTranslations()
  es/
    common.json      # Strings globales (a11y, etc.)
    nav.json         # Navegación y CTA del header
    hero.json        # Sección hero
    footer.json      # Pie de página
    cta.json         # Sección de llamada a la acción
  en/
    common.json
    nav.json
    hero.json
    footer.json
    cta.json
```

## Uso en cualquier componente Astro

```astro
---
import { getLang, useTranslations } from '../../i18n/utils';

const lang = getLang(Astro.url.pathname);
const t = useTranslations(lang);
---

<nav aria-label={t('nav:aria-label')}>...</nav>
<p>{t('footer:copyright')}</p>
<span>{t('hero:available-badge')}</span>
```

## Formato de keys — kebab-case obligatorio

```
namespace:key-con-kebab-case
namespace:key.anidado.con-kebab-case
```

**Regla**: todas las keys usan `kebab-case`. Nunca `snake_case`.

| ✅ Correcto | ❌ Incorrecto |
|------------|--------------|
| `nav:aria-label` | `nav:aria_label` |
| `hero:available-badge` | `hero:available_badge` |
| `footer:built-with` | `footer:built_with` |

## Namespaces disponibles

| Namespace | Archivo | Dominio |
|-----------|---------|---------|
| `common`  | `common.json` | Strings globales (a11y) |
| `nav`     | `nav.json` | Navegación, CTA header |
| `hero`    | `hero.json` | Sección hero |
| `footer`  | `footer.json` | Pie de página |
| `cta`     | `cta.json` | Sección de contacto/CTA |

## Interpolación

Usá `{{varName}}` en el valor JSON y pasá las variables como segundo argumento:

```json
{ "greeting": "Hola, {{name}}!" }
```

```ts
t('common:greeting', { name: 'Mundo' }) // => "Hola, Mundo!"
```

## Cadena de fallback

1. Idioma solicitado (resuelto desde la URL `/en/...` → `en`)
2. Idioma por defecto (`es`)
3. String legible basada en la key (nunca crashea)

## Detección de idioma

`getLang(pathname)` lee el primer segmento de la ruta:

| URL | Lang |
|-----|------|
| `/sobre-mi` | `es` |
| `/en/about` | `en` |
| `/` | `es` |

## Agregar un nuevo namespace

1. Crear `src/i18n/es/<namespace>.json` y `src/i18n/en/<namespace>.json` con keys en kebab-case.
2. Registrar en `src/i18n/utils.ts` con imports estáticos:

```ts
import esMyNs from './es/myNs.json';
import enMyNs from './en/myNs.json';

const translations = {
  es: { ..., myNs: esMyNs as JsonObject },
  en: { ..., myNs: enMyNs as JsonObject },
};
```

3. Usar `t('myNs:some-key')` en los componentes.

## Reglas de contenido

- **Nombres técnicos y marcas** siempre en inglés: `React`, `Node.js`, `Astro`, `SaaS`, `AI Agents`, `Laravel`.
- **Texto visible de usuario** siempre en el JSON, nunca hardcodeado en el componente.
- **Strings de aria-label** también van en el JSON (son strings visibles para usuarios con lectores de pantalla).
