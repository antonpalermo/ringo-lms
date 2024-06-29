import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'

import { CourseController } from './courses/course.controller'
import { CourseService } from './courses/course.service'

@Module({
  imports: [
    ClientsModule.register([
      { name: 'COURSES', transport: Transport.TCP, options: { port: 3001 } }
    ])
  ],
  controllers: [CourseController],
  providers: [CourseService]
})
export class AppModule {}
