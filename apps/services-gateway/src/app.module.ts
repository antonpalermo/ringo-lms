import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'

import { CourseController } from './courses/course.controller'
import { AuthController } from './auth/auth.controller'

@Module({
  imports: [
    ClientsModule.register([
      { name: 'AUTH', transport: Transport.TCP, options: { port: 3002 } },
      { name: 'COURSES', transport: Transport.TCP, options: { port: 3001 } }
    ])
  ],
  controllers: [CourseController, AuthController]
})
export class AppModule {}
