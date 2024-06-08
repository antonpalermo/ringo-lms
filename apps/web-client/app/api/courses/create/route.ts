import { db } from '@packages/globals-database'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const course = await db
      .insertInto('courses')
      .values({
        name: 'Sample'
      })
      .returning(['name'])
      .executeTakeFirstOrThrow()

    console.log('course', course)

    return NextResponse.json(course)
  } catch (error) {
    console.log(error)
  }
}
