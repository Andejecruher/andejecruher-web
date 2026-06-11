# Guía editorial del blog

Esta guía define el contrato editorial y técnico para publicar artículos sin romper imágenes, SEO, accesibilidad ni rutas existentes.

## Estructura recomendada

1. **Introducción:** explica el problema, audiencia y resultado esperado.
2. **Contexto:** restricciones, decisiones y conceptos necesarios.
3. **Desarrollo:** divide el contenido con `##` y `###`, ejemplos y código ejecutable.
4. **Conclusiones o próximos pasos:** resume decisiones y enlaza recursos relevantes.

## Frontmatter

Todos los campos del siguiente ejemplo son obligatorios salvo `updatedDate`. Los borradores usan `status: "draft"` y nunca se incluyen en el build público. `readingTime` es manual y representa minutos enteros positivos.

```md
---
title: "Primeros pasos con agentes de IA: de la idea a la implementación"
description: "Una guía práctica para construir tu primer agente de IA usando Python, LangChain y OpenAI."
pubDate: "2025-03-04"
updatedDate: "2025-03-04"
category: "AI Agents"
tags:
  - python
  - langchain
  - openai
image: "/images/blog/primeros-pasos-agentes-ia.webp"
imageAlt: "Diagrama conceptual de un agente de IA conectado a herramientas y memoria"
author: "Andejecruher"
readingTime: 10
status: "published"
featured: true
---
```

### Reglas de metadata

- **Título:** descriptivo, único, entre 10 y 90 caracteres; evita clickbait.
- **Slug:** nombre del archivo en minúsculas, sin acentos, separado por guiones; no cambiarlo tras publicar.
- **Descripción/extracto:** resumen único de 60–220 caracteres que explique valor y alcance.
- **Categoría:** debe ser una de `AI Agents`, `SaaS Architecture` o `Astro`. Para agregar otra, actualizar `BLOG_CATEGORIES` en `src/content.config.ts`.
- **Tags:** al menos uno, en minúsculas y sin `#`; usa términos consistentes y específicos.
- **Fechas:** formato ISO `YYYY-MM-DD`; agrega `updatedDate` solo cuando haya cambios sustanciales.
- **Estado:** `draft`, `published` o `archived`. Solo `published` es público.
- **Featured:** reserva `true` para contenido prioritario.

## Imágenes destacadas y texto alternativo

Guarda imágenes en `public/images/blog/` y referencia la ruta pública `/images/blog/nombre.webp`. Prefiere WebP o AVIF optimizado; SVG es adecuado para diagramas propios. Mantén relación 16:9 y al menos 1200 × 675 px para cards y Open Graph.

El `imageAlt` debe describir lo visible y relevante, no repetir el título ni comenzar con “imagen de”. Ejemplo: `Diagrama de una plataforma SaaS conectada a tres bases de datos aisladas`.

## Markdown y MDX

- Usa un único título principal mediante frontmatter; comienza el cuerpo con `##`.
- Escribe párrafos breves y listas reales (`-` o `1.`), no guiones visuales.
- Usa tablas solo para datos comparables y mantén encabezados claros.
- Usa bloques cercados con lenguaje para resaltado: ` ```ts `, ` ```bash ` o ` ```php `.
- Los bloques de código largos deben ser ejecutables, relevantes y omitir secretos.
- Usa enlaces internos absolutos como `/blog/slug` y enlaces externos HTTPS descriptivos; evita “haz clic aquí”.
- Explica siglas y evita depender solo del color para transmitir significado.

## SEO y accesibilidad

- Verifica que título, descripción e imagen sean únicos y representen el contenido.
- Incluye palabras clave naturalmente en título, introducción y headings, sin sobreoptimizar.
- Mantén jerarquía lógica `##` → `###`; no saltes niveles.
- Escribe alt útil para imágenes informativas y no incrustes texto esencial solo en imágenes.
- Revisa enlaces, contraste de capturas, tablas y código en móvil.

## Checklist antes de publicar

- [ ] El slug es estable, corto y legible.
- [ ] El frontmatter pasa el schema y `status` es correcto.
- [ ] La descripción tiene entre 60 y 220 caracteres.
- [ ] Categoría y tags reutilizan taxonomías existentes.
- [ ] La imagen existe en `public/images/blog/`, está optimizada y tiene alt descriptivo.
- [ ] Fechas y tiempo de lectura son correctos.
- [ ] Headings mantienen jerarquía y generan un índice útil.
- [ ] Código, tablas, listas y enlaces se revisaron en desktop y móvil.
- [ ] No hay secretos, datos privados ni enlaces rotos.
- [ ] Se ejecutaron `pnpm lint`, `pnpm typecheck` y `pnpm build` (o sus equivalentes disponibles).
