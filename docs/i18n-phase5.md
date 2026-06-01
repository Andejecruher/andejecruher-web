# i18n Fase 5 - Data files y consumo en UI

## Objetivo

Completar i18n del contenido que venia hardcodeado en `src/data/profile.ts`, `src/data/experience.ts` y `src/data/projects.ts`, incluyendo su uso en paginas y previews.

## Decision de estrategia

Se aplico una estrategia mixta y consistente:

1. **Labels cortos y categorias**
   - Se mantienen en namespaces JSON y se consumen con `t()` en componentes.
   - Ejemplos: filtros, estados, categorias, labels de secciones y CTA.

2. **Contenido editorial largo por locale (data files)**
   - Se movio a namespaces dedicados por dominio:
     - `profile-data`
     - `experience-data`
     - `projects-data`
   - Los data files ahora exponen funciones tipadas por idioma:
     - `getProfile(lang)`
     - `getExperiences(lang)`
     - `getProjects(lang)`
   - Cada funcion combina un bloque base no traducible (company, technologies, links, status, etc.) con contenido localizado por `lang`.

## Tradeoffs

- **Pros**
  - Mantiene tipado fuerte en TS para estructuras de negocio.
  - Evita strings editoriales largos hardcodeados en componentes.
  - Conserva fallback a `DEFAULT_LANG` sin romper render.
  - Permite evolucionar texto por locale sin tocar logica de UI.

- **Contras**
  - Duplica estructura de contenido entre `es` y `en`.
  - Requiere disciplina para mantener sincronizados slugs/ids entre base y JSON.

## Cambios aplicados

- Nuevos archivos de contenido editorial:
  - `src/i18n/es/profile-data.json`
  - `src/i18n/en/profile-data.json`
  - `src/i18n/es/experience-data.json`
  - `src/i18n/en/experience-data.json`
  - `src/i18n/es/projects-data.json`
  - `src/i18n/en/projects-data.json`

- Registro de namespaces estaticos en `src/i18n/utils.ts`.

- Adaptacion de data files:
  - `src/data/profile.ts`
  - `src/data/experience.ts`
  - `src/data/projects.ts`

- Adaptacion de consumo en UI:
  - `src/pages/sobre-mi.astro`
  - `src/pages/experiencia.astro`
  - `src/components/sections/home/ExperiencePreview.astro`
  - `src/pages/proyectos/index.astro`
  - `src/components/sections/home/FeaturedProjects.astro`

## Convenciones

- Keys nuevas en `kebab-case`.
- Nombres de marca y tecnologia se mantienen en ingles.
- Fallback de idioma: `lang` solicitado -> `DEFAULT_LANG`.
