import { Controller, Get, Inject } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Controller('auth')
export class AuthController {
  constructor(@Inject('AUTH') private readonly authClient: ClientProxy) {}

  @Get('signin')
  signin() {
    return this.authClient.send({ cmd: 'auth_signin' }, {})
  }
}
