import { Course, db } from '@packages/globals-database'

async function createCourse(course: Pick<Course, 'name' | 'description'>) {
  return await db
    .insertInto('courses')
    .values({ name: course.name, description: course.description })
    .executeTakeFirst()
}

async function getAllCourses() {
  return await db.selectFrom('courses').selectAll().execute()
}

async function getCourse(id: string) {
  return await db
    .selectFrom('courses')
    .where('courses.id', '=', id)
    .selectAll()
    .execute()
}

async function updateCourse(
  id: string,
  { name, description }: Partial<Course>
) {
  return await db
    .updateTable('courses')
    .set({ name, description })
    .where('courses.id', '=', id)
    .executeTakeFirst()
}

async function deleteCourse(id: string) {
  return await db
    .deleteFrom('courses')
    .where('courses.id', '=', id)
    .executeTakeFirst()
}

export default {
  createCourse,
  getCourse,
  getAllCourses,
  updateCourse,
  deleteCourse
}
