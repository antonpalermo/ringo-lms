import { Controller } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'

import { CoursesService } from './courses.service'

@Controller()
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @MessagePattern({ cmd: 'get_courses' })
  getCourses() {
    return this.courseService.getCourses()
  }
}
