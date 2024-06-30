import {
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Controller
} from '@nestjs/common'

import { CourseService } from './course.service'
import { CreateCourseDTO } from './dto/create-course.dto'
import { UpdateCourseDTO } from './dto/update-course.dto'

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getCourses() {
    return this.courseService.fetchAllCourse()
  }

  @Get(':id')
  getCourse(@Param('id') id: string) {
    return this.courseService.fetchCourse(id)
  }

  @Post('create')
  createCourse(@Body() course: CreateCourseDTO) {
    return this.courseService.createCourse(course)
  }

  @Patch(':id/update')
  updateCourse(@Param('id') id: string, @Body() course: UpdateCourseDTO) {
    return this.courseService.updateCourse(id, course)
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return this.courseService.deleteCourse(id)
  }
}
