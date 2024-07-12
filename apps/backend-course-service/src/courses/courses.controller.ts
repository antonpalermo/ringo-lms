import { Controller } from '@nestjs/common'
import { MessagePattern, RpcException } from '@nestjs/microservices'

import { CoursesService } from './courses.service'
import { CreateCourseDTO } from './dto/create-course.dto'
import { UpdateCourseDTO } from './dto/update-course.dto'

@Controller()
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @MessagePattern({ cmd: 'create_course' })
  async createCourse(data: CreateCourseDTO) {
    return await this.courseService.createCourse(data)
  }

  @MessagePattern({ cmd: 'update_course' })
  async updateCourse(data: UpdateCourseDTO) {
    return await this.courseService.updateCourse(data)
  }

  @MessagePattern({ cmd: 'delete_course' })
  async deleteCourse(id: string) {
    return this.courseService.deleteCourse(id)
  }

  @MessagePattern({ cmd: 'get_courses' })
  async getCourses() {
    return await this.courseService.findAll()
  }

  @MessagePattern({ cmd: 'get_course' })
  async getCourse(id: string) {
    const course = await this.courseService.find(id)

    if (!course) {
      throw new RpcException({
        status: 404,
        message: 'The requested resource is not avaialble'
      })
    }

    return course
  }
}
