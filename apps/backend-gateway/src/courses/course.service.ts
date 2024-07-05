import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { CreateCourseDTO } from './dto/create-course.dto'
import { UpdateCourseDTO } from './dto/update-course.dto'

@Injectable()
export class CourseService {
  constructor(@Inject('COURSES') private readonly courseClient: ClientProxy) {}

  createCourse(course: CreateCourseDTO) {
    return this.courseClient.send({ cmd: 'create_course' }, course)
  }

  updateCourse(id: string, course: UpdateCourseDTO) {
    return this.courseClient.send({ cmd: 'update_course' }, { id, ...course })
  }

  deleteCourse(id: string) {
    return this.courseClient.send({ cmd: 'delete_course' }, id)
  }

  fetchAllCourse() {
    return this.courseClient.send({ cmd: 'get_courses' }, {})
  }

  async fetchCourse(id: string) {
    return this.courseClient.send({ cmd: 'get_course' }, id)
  }
}
