import { Injectable } from '@nestjs/common'

@Injectable()
export class CoursesService {
  private readonly courses: any[] = [
    {
      name: 'Javascript Fundamentals',
      description: 'Javascript for absolute beginers.'
    },
    {
      name: 'Rust Basic',
      description: 'Introduction to rust programming.'
    }
  ]

  getCourses() {
    return this.courses
  }
}
