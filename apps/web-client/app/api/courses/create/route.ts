import { z } from 'zod'
import { NextResponse } from 'next/server'

import { db } from '@packages/globals-database'
import { Errors } from '@/libs/errors'

const courseSchema = z.object({
  name: z.string(),
  description: z.string()
})

export async function POST(req: Request) {
  // get the request body.
  const requestedData = await req.json()

  // validate data
  const { data, success } = courseSchema.safeParse(requestedData)

  // return error if provided data is not valid.
  if (!success) {
    return NextResponse.json(
      { error: Errors.INVALID_COURSE_DETAILS },
      { status: 405 }
    )
  }

  try {
    const course = await db
      .insertInto('courses')
      .values({
        name: data.name
      })
      .returning(['name'])
      .executeTakeFirstOrThrow()

    return NextResponse.json(course)
  } catch (error) {
    return NextResponse.json(
      { error: Errors.INTERNAL_SERVER_ERROR },
      { status: 500 }
    )
  }
}
