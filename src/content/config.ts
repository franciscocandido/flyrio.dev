import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    isDraft: z.boolean(),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    banner: z.object({
      src: z.string(),
    }),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
