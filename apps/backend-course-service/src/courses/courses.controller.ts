import { Controller } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'

import { CoursesService } from './courses.service'

@Controller()
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @MessagePattern({ cmd: 'get_courses' })
  courses() {
    return this.courseService.courses()
  }

  @MessagePattern({ cmd: 'get_course' })
  course() {}
}
