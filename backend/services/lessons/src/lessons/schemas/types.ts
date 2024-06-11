import { z } from 'zod';

export const LessonSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  videoUrl: z.string(),
  duration: z.number(),
  completed: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
});

export type LessonType = z.infer<typeof LessonSchema>;
