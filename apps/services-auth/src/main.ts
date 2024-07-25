import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

import { AuthModule } from './auth.module'

async function bootstrap() {
  const app = await NestFactory.create(AuthModule)

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: 3002
    }
  })

  await app.startAllMicroservices()
  await app.listen(3002)
}

bootstrap()
