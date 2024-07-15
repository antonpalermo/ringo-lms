import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH') private readonly authClient: ClientProxy) {}

  signIn(): any {
    return this.authClient.send({ cmd: 'auth_signin' }, {})
  }
}
