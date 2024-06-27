import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Auth } from './auth/auth'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Auth]
})
export class AppModule {}
