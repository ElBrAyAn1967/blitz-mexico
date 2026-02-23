import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reportes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reportes' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    icon: z.string(),
    team: z.array(z.object({
      name: z.string(),
      discord: z.string().optional(),
    })).default([]),
    members: z.number().default(0),
    area: z.string(),
    phase: z.number().default(0),
    status: z.enum(['completed', 'in-progress', 'concept', 'minimal']).default('concept'),
    techStack: z.array(z.string()).default([]),
    contracts: z.array(z.object({
      name: z.string(),
      deployed: z.boolean().default(false),
      address: z.string().optional(),
    })).default([]),
    repo: z.string().optional(),
    deployUrl: z.string().optional(),
    messages: z.number().default(0),
    errors: z.array(z.object({
      description: z.string(),
      cause: z.string(),
      severity: z.enum(['critical', 'high', 'medium', 'low']).default('medium'),
      resolved: z.boolean().default(false),
    })).default([]),
  }),
});

export const collections = { reportes };
