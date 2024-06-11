import { z } from 'zod';

export const RetrieveCoursesResponseSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  qtdModules: z.number(),
  qtdLessons: z.number(),
  qtdLessonsCompleted: z.number(),
  percentageCompleted: z.number(),
  backgroundImage: z.string(),
});

export type RetrieveCoursesResponse = z.infer<
  typeof RetrieveCoursesResponseSchema
>;
