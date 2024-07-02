import { z } from 'zod'

export const courseSchema = z
  .object({
    name: z.string(),
    description: z.string()
  })
  .required()

export type CreateCourseDTO = z.infer<typeof courseSchema>
