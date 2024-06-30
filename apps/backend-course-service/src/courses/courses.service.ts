import { Injectable } from '@nestjs/common'
import { db } from '@packages/globals-database'
import { CreateCourseDTO } from './dto/create-course.dto'
import { UpdateCourseDTO } from './dto/update-course.dto'

@Injectable()
export class CoursesService {
  async create(createCourseDTO: CreateCourseDTO) {
    return `This action will create a new course entry with the provided ${createCourseDTO} object`
  }

  async update(id: string, updateCourseDTO: UpdateCourseDTO) {
    return `This action will update existing course entry with the provided id ${id} and ${updateCourseDTO} object`
  }

  async delete(id: string) {
    return `This action will delete existing course entry with the provided id ${id}`
  }

  async course(id: string) {
    return `This action returns a course with the ${id} provided`
  }

  async courses() {
    return await db.selectFrom('courses').selectAll().execute()
  }
}
