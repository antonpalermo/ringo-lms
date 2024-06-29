import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Injectable()
export class CourseService {
  constructor(@Inject('COURSES') private readonly courseClient: ClientProxy) {}

  courses() {
    return this.courseClient.send({ cmd: 'get_courses' }, {})
  }
}
