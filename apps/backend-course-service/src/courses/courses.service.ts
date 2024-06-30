import { Injectable } from '@nestjs/common'
import { db } from '@packages/globals-database'

import { CreateCourseDTO } from './dto/create-course.dto'
import { UpdateCourseDTO } from './dto/update-course.dto'

@Injectable()
export class CoursesService {
  async createCourse({
    name,
    description
  }: CreateCourseDTO): Promise<any> /** TODO: update inferred type */ {
    try {
      return await db
        .insertInto('courses')
        .values({
          name,
          description
        })
        .returning(['courses.id', 'courses.name'])
        .executeTakeFirst()
    } catch (error) {
      console.log('error: ', error)
    }
  }

  async updateCourse(updateCourseDTO: UpdateCourseDTO): Promise<any> {
    try {
      return await db
        .updateTable('courses')
        .set({ ...updateCourseDTO })
        .where('courses.id', '=', updateCourseDTO.id)
        .returning(['courses.id', 'courses.name'])
        .executeTakeFirst()
    } catch (error) {
      console.log('error: ', error)
    }
  }

  async deleteCourse(id: string): Promise<any> {
    try {
      return await db
        .deleteFrom('courses')
        .where('courses.id', '=', id)
        .returning('courses.id')
        .executeTakeFirst()
    } catch (error) {
      console.log('error: ', error)
    }
  }

  async find(id: string) {
    return await db
      .selectFrom('courses')
      .selectAll()
      .where('courses.id', '=', id)
      .executeTakeFirst()
  }

  async findAll() {
    try {
      return await db.selectFrom('courses').selectAll().execute()
    } catch (error) {
      console.log(error)
    }
  }
}
