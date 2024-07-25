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
  UseFilters,
  Inject
} from '@nestjs/common'

import { CreateCourseDTO } from './dto/create-course.dto'
import { UpdateCourseDTO } from './dto/update-course.dto'
import { ZodValidationPipe } from '../pipes/zod.pipe'

import { courseSchema } from './dto/create-course.dto'
import { NotFoundRpcExceptionFilter } from 'src/filters/not-found.filter'
import { ClientProxy } from '@nestjs/microservices'

@Controller('courses')
export class CourseController {
  constructor(@Inject('COURSES') private readonly courseClient: ClientProxy) {}

  @Get()
  getCourses(): any {
    return this.courseClient.send({ cmd: 'get_courses' }, {})
  }

  @UseFilters(new NotFoundRpcExceptionFilter())
  @Get(':id')
  getCourse(@Param('id', new ParseUUIDPipe()) id: string): any {
    return this.courseClient.send({ cmd: 'get_course' }, id)
  }

  @Post('create')
  @UsePipes(new ZodValidationPipe(courseSchema))
  createCourse(@Body() course: CreateCourseDTO): any {
    return this.courseClient.send({ cmd: 'create_course' }, course)
  }

  @Patch(':id/update')
  updateCourse(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() course: UpdateCourseDTO
  ): any {
    return this.courseClient.send({ cmd: 'update_course' }, { id, ...course })
  }

  @Delete(':id')
  deleteCourse(@Param('id', new ParseUUIDPipe()) id: string): any {
    return this.courseClient.send({ cmd: 'delete_course' }, id)
  }
}
