import {
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Controller,
  ParseUUIDPipe,
  UsePipes,
  UseFilters
} from '@nestjs/common'

import { CourseService } from './course.service'
import { CreateCourseDTO } from './dto/create-course.dto'
import { UpdateCourseDTO } from './dto/update-course.dto'
import { ZodValidationPipe } from '../pipes/zod.pipe'

import { courseSchema } from '../courses/dto/create-course.dto'
import { NotFoundRpcExceptionFilter } from 'src/filters/not-found.filter'

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getCourses(): any {
    return this.courseService.fetchAllCourse()
  }

  @UseFilters(new NotFoundRpcExceptionFilter())
  @Get(':id')
  getCourse(@Param('id', new ParseUUIDPipe()) id: string): any {
    return this.courseService.fetchCourse(id)
  }

  @Post('create')
  @UsePipes(new ZodValidationPipe(courseSchema))
  createCourse(@Body() course: CreateCourseDTO): any {
    return this.courseService.createCourse(course)
  }

  @Patch(':id/update')
  updateCourse(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() course: UpdateCourseDTO
  ): any {
    return this.courseService.updateCourse(id, course)
  }

  @Delete(':id')
  deleteCourse(@Param('id', new ParseUUIDPipe()) id: string): any {
    return this.courseService.deleteCourse(id)
  }
}
