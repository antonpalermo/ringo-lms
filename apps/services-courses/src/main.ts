import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

import { CoursesModule } from './courses.module'

async function bootstrap() {
  const app = await NestFactory.create(CoursesModule)

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: 3001
    }
  })

  await app.startAllMicroservices()
  await app.listen(3001)
}
bootstrap()
