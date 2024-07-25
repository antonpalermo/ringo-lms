import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
  async signin() {
    return { message: 'sample message' }
  }
}
