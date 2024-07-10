import { Injectable, Logger } from '@nestjs/common'
import { db, jsonArrayFrom } from '@packages/globals-database'

import { CreateCourseDTO } from './dto/create-course.dto'
import { UpdateCourseDTO } from './dto/update-course.dto'

@Injectable()
export class CoursesService {
  private readonly logger = new Logger(CoursesService.name)

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
      this.logger.fatal('unable to create course', { name, description })
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
      this.logger.fatal(
        `unable to update course ${updateCourseDTO.id}`,
        updateCourseDTO.id
      )
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
      this.logger.fatal('unable to delete course', id)
    }
  }

  async find(id: string) {
    try {
      return await db
        .selectFrom('courses')
        .select(({ eb }) => [
          'courses.id',
          'courses.name',
          'courses.description',
          'courses.isDraft',
          jsonArrayFrom(
            eb
              .selectFrom('chapters')
              .selectAll()
              .whereRef('chapters.courseId', '=', 'courses.id')
          ).as('chapters'),
          'courses.dateCreated',
          'courses.dateUpdated'
        ])
        .where('courses.id', '=', id)
        .executeTakeFirst()
    } catch (error) {
      this.logger.fatal('unable to find course', id)
    }
  }

  async findAll() {
    try {
      return await db.selectFrom('courses').selectAll().execute()
    } catch (error) {
      this.logger.fatal('unable to find all available course')
    }
  }
}
