# Auditoría i18n — Inventario de texto visible hardcodeado

> **Propósito**: Identificar y clasificar todo el texto visible hardcodeado en el repositorio para planificar la migración a un sistema de internacionalización (i18n).
> **Fecha de auditoría**: 2026-05-31
> **Rama auditada**: `main`
> **Herramienta objetivo**: `astro-i18next` o `@astrojs/i18n` (a definir en contrato)

---

## Alcance

| Incluido | Excluido |
|----------|----------|
| Componentes `.astro` en `src/components/` | Nombres de variables, funciones, interfaces TypeScript |
| Páginas `.astro` en `src/pages/` | Rutas de importación y módulos |
| Archivos de datos `.ts` en `src/data/` con texto visible | Comentarios de código y atributos `aria-hidden="true"` |
| Layouts en `src/layouts/` | Valores de color, medidas CSS inline |
| Texto en atributos accesibles (`aria-label`, `alt`, `placeholder`) | Fragmentos de código decorativo (el bloque `<code>` del Hero) |

---

## Criterios de clasificación

| Prioridad | Criterio |
|-----------|----------|
| 🔴 **Alta** | Texto visible directamente en la UI: headings, párrafos, CTAs, labels, botones |
| 🟡 **Media** | Atributos accesibles (`aria-label`, `alt`, `placeholder`, `title`), mensajes de estado |
| 🟢 **Baja** | Texto técnico decorativo, comentarios internos, nombres de marca fijos |

---

## Texto visible al usuario que debe traducirse

### Header (`src/components/layout/Header.astro`)

| Archivo:Línea | Literal exacto | Contexto | Clave i18n sugerida | Prioridad |
|---|---|---|---|---|
| `Header.astro:16` | `"Navegación principal"` | `aria-label` del `<nav>` | `nav.ariaLabel` | 🟡 Media |
| `Header.astro:19` | `"Andejecruher - Inicio"` | `aria-label` del logo link | `nav.logoAriaLabel` | 🟡 Media |
| `Header.astro:64` | `"Let's Connect"` | Botón CTA desktop | `nav.cta` | 🔴 Alta |
| `Header.astro:84` | `"Abrir menú"` | `aria-label` del botón hamburguesa | `nav.menuOpen` | 🟡 Media |
| `Header.astro:125` | `"Conectemos"` | CTA móvil (menú desplegable) | `nav.ctaMobile` | 🔴 Alta |

> ⚠️ **Inconsistencia detectada**: el CTA desktop dice "Let's Connect" (inglés) y el CTA móvil dice "Conectemos" (español). Requiere unificación antes de i18n.

---

### Footer (`src/components/layout/Footer.astro`)

| Archivo:Línea | Literal exacto | Contexto | Clave i18n sugerida | Prioridad |
|---|---|---|---|---|
| `Footer.astro:23` | `"Full Stack Developer. Construyo SaaS, AI Agents y automatizaciones que impulsan negocios."` | Tagline de marca en footer | `footer.tagline` | 🔴 Alta |
| `Footer.astro:71` | `"Navegación"` | Heading de columna de links | `footer.navHeading` | 🔴 Alta |
| `Footer.astro:91` | `"Contacto"` | Heading de columna de contacto | `footer.contactHeading` | 🔴 Alta |
| `Footer.astro:117` | `"Remote · Available Worldwide"` | Texto de disponibilidad | `footer.availability` | 🔴 Alta |
| `Footer.astro:128` | `"Todos los derechos reservados."` | Copyright | `footer.rights` | 🟡 Media |
| `Footer.astro:131` | `"Built with"` | Crédito de tecnología | `footer.builtWith` | 🟢 Baja |

---

### Hero (`src/components/sections/home/Hero.astro`)

| Archivo:Línea | Literal exacto | Contexto | Clave i18n sugerida | Prioridad |
|---|---|---|---|---|
| `Hero.astro:18` | `"Presentación principal"` | `aria-label` de la sección | `hero.ariaLabel` | 🟡 Media |
| `Hero.astro:70` | `"AVAILABLE FOR PROJECTS"` | Badge de disponibilidad | `hero.availableBadge` | 🔴 Alta |
| `Hero.astro:79` | `"Full Stack Developer \| AI Agents & Automation"` | H1 principal | `hero.headline` | 🔴 Alta |
| `Hero.astro:91` | `"Tecnologías principales"` | `aria-label` de la lista de badges | `hero.techListAriaLabel` | 🟡 Media |
| `Hero.astro:119` | `"View My Work"` | CTA primario | `hero.ctaPrimary` | 🔴 Alta |
| `Hero.astro:152` | `"Download Resume"` | CTA secundario | `hero.ctaSecondary` | 🔴 Alta |
| `Hero.astro:160` | `"Estadísticas"` | `aria-label` del bloque de stats | `hero.statsAriaLabel` | 🟡 Media |
| `Hero.astro:262` | `"Fragmento de código decorativo"` | `aria-label` del code block | `hero.codeBlockAriaLabel` | 🟡 Media |
| `Hero.astro:330` | `"Andejecruher AC isotipo"` | `alt` de imagen isotipo | `hero.isotipoAlt` | 🟡 Media |

> ⚠️ **Inconsistencia detectada**: "AVAILABLE FOR PROJECTS" está en inglés en el Hero, pero la sección ContactCTA usa "DISPONIBLE PARA PROYECTOS" (español). Requiere unificación.

---

### ContactCTA (`src/components/sections/home/ContactCTA.astro`)

| Archivo:Línea | Literal exacto | Contexto | Clave i18n sugerida | Prioridad |
|---|---|---|---|---|
| `ContactCTA.astro:22` | `"DISPONIBLE PARA PROYECTOS"` | Badge de disponibilidad | `cta.availableBadge` | 🔴 Alta |
| `ContactCTA.astro:29` | `"Hablemos de tu próximo proyecto"` | Heading de la sección | `cta.heading` | 🔴 Alta |
| `ContactCTA.astro:33` | `"Construyo soluciones técnicas..."` | Párrafo descriptivo | `cta.description` | 🔴 Alta |
| `ContactCTA.astro:44` | `"Contactarme"` | Botón CTA primario | `cta.primaryButton` | 🔴 Alta |

---

### ExperiencePreview (`src/components/sections/home/ExperiencePreview.astro`)

| Archivo:Línea | Literal exacto | Contexto | Clave i18n sugerida | Prioridad |
|---|---|---|---|---|
| `ExperiencePreview.astro:11` | `"Experiencia"` | Badge de sección | `experience.badge` | 🟡 Media |
| `ExperiencePreview.astro:12` | `"Trayectoria profesional"` | Título de sección | `experience.sectionTitle` | 🔴 Alta |
| `ExperiencePreview.astro:13` | `"Historial de proyectos..."` | Subtítulo de sección | `experience.sectionSubtitle` | 🔴 Alta |
| `ExperiencePreview.astro:60` | `"Ver experiencia completa"` | Link a página completa | `experience.viewAll` | 🔴 Alta |

---

### FeaturedProjects (`src/components/sections/home/FeaturedProjects.astro`)

| Archivo:Línea | Literal exacto | Contexto | Clave i18n sugerida | Prioridad |
|---|---|---|---|---|
| `FeaturedProjects.astro:11` | `"Proyectos"` | Badge de sección | `projects.badge` | 🟡 Media |
| `FeaturedProjects.astro:12` | `"Trabajo destacado"` | Título de sección | `projects.sectionTitle` | 🔴 Alta |
| `FeaturedProjects.astro:13` | `"Selección de proyectos..."` | Subtítulo | `projects.sectionSubtitle` | 🔴 Alta |
| `FeaturedProjects.astro:70` | `"Ver todos los proyectos"` | CTA de proyectos | `projects.viewAll` | 🔴 Alta |

---

### Página Contacto (`src/pages/contacto.astro`)

| Archivo:Línea | Literal exacto | Contexto | Clave i18n sugerida | Prioridad |
|---|---|---|---|---|
| `contacto.astro:11` | `"Para consultas de proyectos o colaboraciones."` | Descripción del método email | `contact.emailDescription` | 🔴 Alta |
| `contacto.astro:19` | `"Para conversaciones rápidas y consultas directas."` | Descripción del método WhatsApp | `contact.whatsappDescription` | 🔴 Alta |
| `contacto.astro:27` | `"Revisa mi código y proyectos open source."` | Descripción del método GitHub | `contact.githubDescription` | 🔴 Alta |
| `contacto.astro:35` | `"Conecta conmigo profesionalmente."` | Descripción del método LinkedIn | `contact.linkedinDescription` | 🔴 Alta |
| `contacto.astro:48` | `"Hablemos de tu próximo proyecto"` | Título de PageHeader | `contact.pageTitle` | 🔴 Alta |
| `contacto.astro:49` | `"Estoy disponible para proyectos freelance..."` | Subtítulo de PageHeader | `contact.pageSubtitle` | 🔴 Alta |
| `contacto.astro:63` | `"Métodos de contacto"` | H2 de columna izquierda | `contact.methodsHeading` | 🔴 Alta |
| `contacto.astro:66` | `"Puedes contactarme por cualquiera..."` | Descripción de métodos | `contact.methodsDescription` | 🔴 Alta |
| `contacto.astro:130` | `"Envíame un mensaje"` | H2 del formulario | `contact.formHeading` | 🔴 Alta |
| `contacto.astro:133` | `"Describe tu proyecto o consulta..."` | Descripción del formulario | `contact.formDescription` | 🔴 Alta |
| `contacto.astro:147` | `"Nombre"` | Label del campo nombre | `contact.form.nameLabelAriaLabel` | 🟡 Media |
| `contacto.astro:154` | `"Tu nombre"` | Placeholder del campo nombre | `contact.form.namePlaceholder` | 🟡 Media |
| `contacto.astro:163` | `"Email"` | Label del campo email | `contact.form.emailLabel` | 🟡 Media |
| `contacto.astro:170` | `"tu@email.com"` | Placeholder del campo email | `contact.form.emailPlaceholder` | 🟡 Media |
| `contacto.astro:181` | `"Asunto"` | Label del campo asunto | `contact.form.subjectLabel` | 🟡 Media |
| `contacto.astro:187` | `"¿De qué trata tu proyecto?"` | Placeholder del campo asunto | `contact.form.subjectPlaceholder` | 🟡 Media |
| `contacto.astro:197` | `"Mensaje"` | Label del campo mensaje | `contact.form.messageLabel` | 🟡 Media |
| `contacto.astro:204` | `"Cuéntame sobre tu proyecto..."` | Placeholder del textarea | `contact.form.messagePlaceholder` | 🟡 Media |
| `contacto.astro:219` | `"Enviar mensaje"` | Botón submit | `contact.form.submitButton` | 🔴 Alta |
| `contacto.astro:223` | `"El formulario se conectará próximamente..."` | Nota provisional visible | `contact.form.pendingNote` | 🟢 Baja |

---

### Página Sobre mí (`src/pages/sobre-mi.astro`)

| Archivo:Línea | Literal exacto | Contexto | Clave i18n sugerida | Prioridad |
|---|---|---|---|---|
| `sobre-mi.astro:17` | `"Perfil"` | Badge de PageHeader | `about.badge` | 🟡 Media |
| `sobre-mi.astro:18` | `"Sobre mí"` | Título de PageHeader | `about.pageTitle` | 🔴 Alta |
| `sobre-mi.astro:19` | `"Desarrollador Full Stack con enfoque..."` | Subtítulo | `about.pageSubtitle` | 🔴 Alta |
| `sobre-mi.astro:103` | `"Áreas de enfoque"` | H2 de sección | `about.focusAreasHeading` | 🔴 Alta |
| `sobre-mi.astro:84` | `"Disponible para proyectos"` | Badge de disponibilidad | `about.availableBadge` | 🔴 Alta |

---

### Página Experiencia (`src/pages/experiencia.astro`)

| Archivo:Línea | Literal exacto | Contexto | Clave i18n sugerida | Prioridad |
|---|---|---|---|---|
| `experiencia.astro:12` | `"Trayectoria"` | Badge de PageHeader | `experience.badge` | 🟡 Media |
| `experiencia.astro:13` | `"Experiencia profesional"` | Título de PageHeader | `experience.pageTitle` | 🔴 Alta |
| `experiencia.astro:14` | `"Roles, proyectos y aprendizajes..."` | Subtítulo | `experience.pageSubtitle` | 🔴 Alta |
| `experiencia.astro:31` | `"Algunos proyectos profesionales..."` | Nota de confidencialidad | `experience.confidentialityNote` | 🟡 Media |
| `experiencia.astro:90` | `"Responsabilidades"` | Subheading de tarjeta | `experience.responsibilities` | 🔴 Alta |
| `experiencia.astro:103` | `"Logros"` | Subheading de tarjeta | `experience.achievements` | 🔴 Alta |
| `experiencia.astro:119` | `"Tecnologías"` | Subheading de tarjeta | `experience.technologies` | 🟡 Media |
| `experiencia.astro:146` | `"Proyecto desarrollado como parte..."` | Nota inline de confidencialidad | `experience.confidentialInline` | 🟡 Media |

---

## Texto técnico interno que puede permanecer en inglés

Estos literales son parte del lenguaje técnico o de marca del desarrollador. **No deben traducirse**, incluso en la versión en español.

| Archivo:Línea | Literal | Razón |
|---|---|---|
| `Hero.astro:7–11` | `"SaaS"`, `"Laravel"`, `"Python"`, `"Node.js"`, `"React"` | Nombres de tecnología/marca |
| `Hero.astro:268–316` | Todo el bloque de código decorativo | Fragmento de código sintético, propósito visual |
| `Footer.astro:131` | `"Astro"` | Nombre de tecnología |
| `profile.ts:5` | `'SaaS · AI Agents · APIs REST'` | Tagline técnico de marca |
| `profile.ts:6` | `'Full Stack Developer \| React · Node.js...'` | Headline de perfil profesional |
| Todos los `.ts` en `src/data/` | Nombres de tecnologías en arrays `technologies[]` | Nombres de marca técnica |

---

## Slugs y rutas que requieren estrategia bilingüe

Las rutas actuales están en español. Una implementación i18n requiere decidir si se mantienen o se duplican.

| Ruta actual | Ruta EN propuesta | Estrategia recomendada |
|---|---|---|
| `/` | `/en/` | Redirect por locale detectado |
| `/experiencia` | `/en/experience` | Rutas duplicadas con prefijo `/en/` |
| `/proyectos` | `/en/projects` | Ídem |
| `/sobre-mi` | `/en/about` | Ídem |
| `/stack` | `/en/stack` | Mismo slug (término técnico universal) |
| `/blog` | `/en/blog` | Mismo slug |
| `/contacto` | `/en/contact` | Rutas duplicadas con prefijo `/en/` |

> 💡 **Recomendación**: Usar el patrón `[lang]/[...slug]` de Astro con `getStaticPaths()`. Las rutas en español son el idioma predeterminado (sin prefijo). El inglés usa prefijo `/en/`.

---

## Contenido editable que debe migrarse a traducciones

Estos datos están en archivos `.ts` en `src/data/`. Son texto visible pero controlado por datos estructurados. Requieren su propio plan de migración.

| Archivo | Campos de texto afectados | Estrategia sugerida |
|---|---|---|
| `src/data/profile.ts` | `description`, `about`, `additionalInfo[]`, `location`, `tagline` | Duplicar como `profile.es.ts` / `profile.en.ts` |
| `src/data/navigation.ts` | `label` de cada `NavItem` | Incluir en namespace `nav` de i18n |
| `src/data/stats.ts` | `label` de cada `Stat` | Incluir en namespace `hero` de i18n |
| `src/data/experience.ts` | `role`, `description`, `responsibilities[]`, `achievements[]`, `modality` | Duplicar como datos localizados o usar colección de Astro con locale |
| `src/data/projects.ts` | `name`, `description`, `category` | Ídem |
| `src/data/focusAreas.ts` | `title`, `description` | Incluir en namespace `about` de i18n |
| `src/data/education.ts` | Campos de texto visibles | Revisar e incluir en namespace `about` |

---

## Top prioridades — máximo 10, ordenadas por impacto

| # | Hallazgo | Archivo | Razón de impacto |
|---|---|---|---|
| 1 | CTA "Let's Connect" vs "Conectemos" | `Header.astro:64` / `Header.astro:125` | Presente en **cada página**. Inconsistencia idiomática activa. |
| 2 | Badge "AVAILABLE FOR PROJECTS" vs "DISPONIBLE PARA PROYECTOS" | `Hero.astro:70` / `ContactCTA.astro:22` | Visible above-the-fold. Inconsistencia de idioma en el mismo sitio. |
| 3 | H1 Hero — `"Full Stack Developer \| AI Agents & Automation"` | `Hero.astro:79` | Heading principal del sitio. Mezcla inglés en página en español. |
| 4 | CTA Hero — `"View My Work"` / `"Download Resume"` | `Hero.astro:119` / `Hero.astro:152` | Botones primarios above-the-fold, completamente en inglés. |
| 5 | Tagline footer — `"Remote · Available Worldwide"` | `Footer.astro:117` | Presente en **cada página**. |
| 6 | Botón submit formulario — `"Enviar mensaje"` | `contacto.astro:219` | Acción crítica del flujo de conversión. |
| 7 | PageHeader de `/contacto` — título y subtítulo | `contacto.astro:48–49` | Primera impresión de la página de conversión. |
| 8 | Sección "Responsabilidades" / "Logros" en experiencia | `experiencia.astro:90` / `103` | Repetidos en cada tarjeta del timeline. |
| 9 | Footer tagline — `"Full Stack Developer. Construyo SaaS..."` | `Footer.astro:23` | Texto de marca en cada página. |
| 10 | `profile.ts` — campo `description` y `about` | `src/data/profile.ts:7–19` | Texto largo usado en Hero, Sobre mí y SEO meta. |
