import { Injectable } from '@nestjs/common'
import { db } from '@packages/globals-database'

@Injectable()
export class CoursesService {
  async getCourses() {
    return await db.selectFrom('courses').selectAll().execute()
  }
}
