import { Module } from '@nestjs/common'

import { CoursesService } from './courses/courses.service'
import { CoursesController } from './courses/courses.controller'

@Module({
  imports: [],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class AppModule {}
