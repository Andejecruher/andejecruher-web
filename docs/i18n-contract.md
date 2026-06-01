# Contrato de arquitectura i18n

> **Propósito**: Establecer las reglas de diseño, convenciones de nombres y criterios de calidad para implementar internacionalización (i18n) en este proyecto de forma consistente y mantenible.
> **Idiomas objetivo**: Español (predeterminado) · Inglés (`en`)
> **Stack i18n objetivo**: `astro-i18next` o `@astrojs/i18n` (definir antes de implementar)

---

## Decisión de diseño rápida

| Decisión | Opción elegida | Razón |
|---|---|---|
| Idioma predeterminado | Español (`es`) | El sitio actual está mayoritariamente en español |
| Estrategia de rutas | Prefijo `/en/` para inglés, sin prefijo para español | Mínimo cambio de ruptura en rutas existentes |
| Formato de archivos de traducción | JSON plano por namespace | Compatibilidad con la mayoría de librerías i18n de Astro |
| Detección de idioma | `Accept-Language` header + cookie `NEXT_LOCALE` | Sin dependencias de geolocalización |
| Fallback | Español cuando falta una key en inglés | Nunca mostrar key cruda al usuario |

---

## Estructura de archivos

```
src/
  i18n/
    es/
      nav.json
      hero.json
      footer.json
      experience.json
      projects.json
      about.json
      contact.json
      blog.json
      common.json
    en/
      nav.json
      hero.json
      footer.json
      experience.json
      projects.json
      about.json
      contact.json
      blog.json
      common.json
    utils.ts          ← helper: t(), getLangFromUrl(), useTranslations()
    config.ts         ← idiomas soportados, locale predeterminado
```

---

## Naming convention de keys

### Reglas generales

1. **kebab-case** para todas las keys. Sin camelCase, sin snake_case.
2. Estructura: `namespace.contexto.descripcion`
3. Máximo **3 niveles** de profundidad. Si necesitás 4, revisá el diseño.
4. Los nombres de namespace coinciden **exactamente** con el nombre del archivo JSON.
5. Las keys deben describir el **significado semántico**, no el texto literal.

### Ejemplos concretos por dominio

#### `nav.json`
```json
{
  "aria-label": "Navegación principal",
  "logo-aria-label": "Andejecruher - Inicio",
  "cta": "Conectemos",
  "cta-mobile": "Conectemos",
  "menu-open": "Abrir menú",
  "menu-close": "Cerrar menú"
}
```

#### `hero.json`
```json
{
  "available-badge": "Disponible para proyectos",
  "headline-part1": "Full Stack Developer",
  "headline-part2": "AI Agents &",
  "headline-accent": "Automatización",
  "cta-primary": "Ver mi trabajo",
  "cta-secondary": "Descargar CV",
  "stats-aria-label": "Estadísticas",
  "tech-list-aria-label": "Tecnologías principales",
  "code-block-aria-label": "Fragmento de código decorativo",
  "isotipo-alt": "Andejecruher AC isotipo"
}
```

#### `footer.json`
```json
{
  "tagline": "Full Stack Developer. Construyo SaaS, AI Agents y automatizaciones que impulsan negocios.",
  "nav-heading": "Navegación",
  "contact-heading": "Contacto",
  "availability": "Remoto · Disponible en todo el mundo",
  "rights": "Todos los derechos reservados.",
  "built-with": "Construido con"
}
```

#### `contact.json`
```json
{
  "page-title": "Hablemos de tu próximo proyecto",
  "page-subtitle": "Estoy disponible para proyectos freelance, colaboraciones y consultas técnicas.",
  "methods-heading": "Métodos de contacto",
  "methods-description": "Puedes contactarme por cualquiera de estos canales. Respondo en menos de 24 horas.",
  "form-heading": "Envíame un mensaje",
  "form-description": "Describe tu proyecto o consulta y te respondo en menos de 24 horas.",
  "form": {
    "name-label": "Nombre",
    "name-placeholder": "Tu nombre",
    "name-required": "requerido",
    "email-label": "Email",
    "email-placeholder": "tu@email.com",
    "subject-label": "Asunto",
    "subject-placeholder": "¿De qué trata tu proyecto?",
    "message-label": "Mensaje",
    "message-placeholder": "Cuéntame sobre tu proyecto, idea o consulta...",
    "submit": "Enviar mensaje"
  },
  "email-description": "Para consultas de proyectos o colaboraciones.",
  "whatsapp-description": "Para conversaciones rápidas y consultas directas.",
  "github-description": "Revisa mi código y proyectos open source.",
  "linkedin-description": "Conecta conmigo profesionalmente."
}
```

#### `experience.json`
```json
{
  "badge": "Trayectoria",
  "page-title": "Experiencia profesional",
  "page-subtitle": "Roles, proyectos y aprendizajes que han definido mi perfil como desarrollador full stack.",
  "section-title": "Trayectoria profesional",
  "section-subtitle": "Historial de proyectos y roles que me han formado como desarrollador.",
  "view-all": "Ver experiencia completa",
  "responsibilities": "Responsabilidades",
  "achievements": "Logros",
  "technologies": "Tecnologías",
  "confidentiality-note": "Algunos proyectos profesionales listados aquí fueron desarrollados bajo confidencialidad.",
  "confidential-inline": "Proyecto desarrollado como parte de experiencia profesional. Algunos detalles técnicos fueron omitidos por confidencialidad."
}
```

#### `projects.json`
```json
{
  "badge": "Proyectos",
  "section-title": "Trabajo destacado",
  "section-subtitle": "Selección de proyectos que reflejan mi enfoque técnico y mi capacidad de construir soluciones reales.",
  "view-all": "Ver todos los proyectos",
  "status": {
    "active": "Activo",
    "completed": "Completado",
    "in-progress": "En progreso",
    "archived": "Archivado"
  }
}
```

#### `about.json`
```json
{
  "badge": "Perfil",
  "page-title": "Sobre mí",
  "page-subtitle": "Desarrollador Full Stack con enfoque en sistemas que escalan, automatizan y resuelven problemas reales.",
  "focus-areas-heading": "Áreas de enfoque",
  "available-badge": "Disponible para proyectos"
}
```

#### `common.json`
```json
{
  "available-badge": "Disponible para proyectos",
  "logo-alt": "Andejecruher Logo",
  "back-to-home": "Volver al inicio",
  "required-field": "requerido",
  "loading": "Cargando...",
  "error-generic": "Algo salió mal. Intentá de nuevo."
}
```

---

## Namespaces por dominio

| Namespace | Archivo | Responsabilidad |
|---|---|---|
| `nav` | `nav.json` | Header, menú móvil, CTA de navegación |
| `hero` | `hero.json` | Sección hero de la home |
| `footer` | `footer.json` | Footer global |
| `contact` | `contact.json` | Página `/contacto`, formulario, métodos de contacto |
| `experience` | `experience.json` | Página `/experiencia`, preview en home |
| `projects` | `projects.json` | Página `/proyectos`, cards de proyectos |
| `about` | `about.json` | Página `/sobre-mi` |
| `blog` | `blog.json` | Página `/blog`, tarjetas de artículos |
| `common` | `common.json` | Strings reutilizables en múltiples secciones |

> **Regla**: si una key se usa en más de un namespace, pertenece a `common`.

---

## Pluralización

Usar la convención `_one` / `_other` (compatible con i18next y la mayoría de librerías):

```json
// projects.json
{
  "count_one": "{{count}} proyecto",
  "count_other": "{{count}} proyectos"
}
```

```astro
<!-- Uso en componente -->
{t('projects:count', { count: projects.length })}
```

Para español, validar las formas plurales con `Intl.PluralRules`:
- `one`: 1 proyecto
- `other`: 0, 2, 3... proyectos

---

## Interpolación

Usar doble llave `{{variable}}` (estándar i18next). **No concatenar strings**.

```json
// footer.json
{
  "copyright": "© {{year}} Andejecruher. {{rights}}"
}
```

```astro
{t('footer:copyright', { year: new Date().getFullYear(), rights: t('footer:rights') })}
```

### Variables permitidas en interpolación

| Variable | Uso |
|---|---|
| `{{year}}` | Año actual (footer copyright) |
| `{{count}}` | Pluralización numérica |
| `{{name}}` | Nombre del usuario (formularios) |
| `{{email}}` | Email de contacto |

---

## Reglas para ARIA, title y placeholder

| Atributo | Regla | Ejemplo de key |
|---|---|---|
| `aria-label` | **Siempre** traducir si es visible para screen readers | `nav.aria-label` |
| `alt` (imágenes decorativas) | Dejar vacío `alt=""` con `aria-hidden="true"`. No traducir. | — |
| `alt` (imágenes informativas) | **Siempre** traducir | `hero.isotipo-alt` |
| `placeholder` | **Siempre** traducir. Los placeholders son UX visible. | `contact.form.name-placeholder` |
| `title` (tooltip) | Traducir si agrega información semántica | `nav.external-link-title` |
| `aria-current` | Valor booleano/enum, no traducir | — |
| `aria-hidden` | Valor booleano, no traducir | — |
| `aria-expanded` | Valor booleano, no traducir | — |

---

## Fallback

1. Si una key en inglés no existe → mostrar el valor en español.
2. Si una key no existe en ningún idioma → mostrar la key en formato legible (e.g., `"nav.cta"` → `"Nav Cta"`). **Nunca** mostrar la key cruda en producción.
3. El fallback se configura en `i18n/config.ts`:

```typescript
export const defaultLang = 'es';
export const supportedLangs = ['es', 'en'] as const;
export type Lang = typeof supportedLangs[number];

export const fallback: Record<string, string> = {
  en: 'es',
};
```

---

## Anti-patrones — qué NO hacer

### ❌ Concatenar strings traducidos
```astro
<!-- MAL: rompe idiomas con orden de palabras diferente -->
{t('footer:built-with')} <span>Astro</span> {t('common:by')} Andejecruher

<!-- BIEN: usar interpolación o componentes separados -->
{t('footer:built-with-attribution', { tech: 'Astro', author: 'Andejecruher' })}
```

### ❌ Keys con el texto literal como nombre
```json
// MAL: frágil, rompe si el texto cambia
{ "Hablemos de tu próximo proyecto": "..." }

// BIEN: nombre semántico estable
{ "page-title": "Hablemos de tu próximo proyecto" }
```

### ❌ Usar el mismo string para contextos distintos
```json
// MAL: "Proyectos" puede ser badge, heading o nav link — son contextos distintos
{ "projects": "Proyectos" }

// BIEN: contexto explícito por namespace
// nav.json: { "projects": "Proyectos" }
// projects.json: { "badge": "Proyectos", "section-title": "Trabajo destacado" }
```

### ❌ Hardcodear texto fuera del sistema de traducciones
```astro
<!-- MAL -->
<button>Enviar mensaje</button>

<!-- BIEN -->
<button>{t('contact:form.submit')}</button>
```

### ❌ Traducir nombres de marca y tecnologías
```json
// MAL: los nombres de tecnología son marca, no texto de UI
{ "stack-intro": "Trabajo con {{laravel}} y {{nodejs}}" }

// BIEN: dejar los nombres de tecnología como literales fuera de la key
{ "stack-intro": "Trabajo con tecnologías modernas orientadas a producción." }
```

### ❌ Mezclar idiomas en el mismo componente sin sistema i18n
```astro
<!-- MAL: mezcla actual sin sistema — detectada en Header.astro -->
<a>Let's Connect</a>  <!-- desktop: inglés -->
<a>Conectemos</a>     <!-- móvil: español -->

<!-- BIEN: una sola key, misma fuente de verdad -->
<a>{t('nav:cta')}</a>
```

### ❌ Nesting profundo de keys (más de 3 niveles)
```json
// MAL
{ "contact": { "form": { "fields": { "name": { "label": "Nombre" } } } } }

// BIEN: máximo 3 niveles
{ "form": { "name-label": "Nombre" } }
```

---

## Checklist de PR — i18n

Antes de aprobar cualquier PR que modifique UI visible, verificar:

- [ ] Todo texto visible al usuario usa `t('namespace:key')`, no literales hardcodeados
- [ ] Los atributos `aria-label`, `alt` informativos y `placeholder` están traducidos
- [ ] Ninguna key supera 3 niveles de profundidad
- [ ] Las keys siguen kebab-case
- [ ] Las keys nuevas están presentes en **ambos** idiomas (`es/` y `en/`)
- [ ] No se concatenan strings de traducción (se usa interpolación `{{var}}`)
- [ ] Los nombres de tecnología y marca no se traducen
- [ ] La key de fallback en `es/` existe para todo lo nuevo en `en/`
- [ ] Los archivos JSON tienen formato consistente (sin trailing commas, UTF-8)
- [ ] Se actualizó la auditoría `docs/i18n-audit.md` si se resuelve un hallazgo pendiente

---

## Definition of Done (DoD) — i18n 100% alineado

El sistema de i18n se considera **completamente implementado** cuando se cumplen TODOS estos criterios:

### Cobertura

- [ ] Cero literales hardcodeados de texto visible en componentes `.astro`
- [ ] Cero literales en archivos de datos `src/data/*.ts` que sean texto de UI (migrados a archivos de traducción o datos localizados)
- [ ] Todos los atributos accesibles (`aria-label`, `alt`, `placeholder`) están traducidos
- [ ] Los status labels de proyectos (`statusLabels`) están en el namespace `projects`

### Rutas

- [ ] Las rutas en español funcionan sin prefijo: `/experiencia`, `/proyectos`, etc.
- [ ] Las rutas en inglés funcionan con prefijo `/en/`: `/en/experience`, `/en/projects`, etc.
- [ ] El selector de idioma está presente en header y footer
- [ ] El cambio de idioma preserva la ruta actual (no redirige siempre a `/`)

### Calidad

- [ ] No hay mezcla de idiomas en el mismo componente (resueltas todas las inconsistencias del audit)
- [ ] Los meta tags SEO (`title`, `description`) están localizados en cada página
- [ ] El `lang` del `<html>` cambia según el idioma activo
- [ ] Todos los archivos de traducción tienen el mismo conjunto de keys (sin keys huérfanas)
- [ ] Los tests de build pasan sin warnings de keys faltantes

### Proceso

- [ ] El checklist de PR de i18n está integrado en la plantilla de PR del repositorio
- [ ] La auditoría `docs/i18n-audit.md` refleja el estado actual (0 hallazgos pendientes)
- [ ] Al menos un ciclo de revisión por hablante nativo de inglés completado

---

## Próximos pasos inmediatos

1. **Resolver inconsistencias de idioma** (prioridades #1 y #2 del audit) antes de implementar el sistema. Unificar CTAs al español.
2. **Elegir la librería i18n** (`astro-i18next` recomendado por compatibilidad con SSG/SSR en Astro 4+).
3. **Crear `src/i18n/config.ts`** con la configuración base.
4. **Migrar namespace `nav` y `footer`** como prueba de concepto (impacto global, volumen bajo).
5. **Iterar por página** siguiendo las prioridades del audit.
