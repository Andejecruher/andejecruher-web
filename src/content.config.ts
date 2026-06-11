import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const BLOG_CATEGORIES = ['AI Agents', 'SaaS Architecture', 'Astro'] as const;

const publicBlogImage = z
  .string()
  .trim()
  .min(1, 'La imagen destacada no puede estar vacía')
  .refine((path) => path.startsWith('/images/blog/'), {
    message: 'Las imágenes del blog deben guardarse en public/images/blog y usar /images/blog/...',
  });

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().trim().min(10).max(90),
    description: z.string().trim().min(60).max(220),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(BLOG_CATEGORIES),
    tags: z.array(z.string().trim().min(1)).min(1),
    image: publicBlogImage,
    imageAlt: z.string().trim().min(20).max(180),
    author: z.string().trim().min(1).default('Andejecruher'),
    readingTime: z.number().int().positive(),
    status: z.enum(['draft', 'published', 'archived']).default('draft'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
