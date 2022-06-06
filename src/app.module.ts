import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbconectionModule } from './dbconection/dbconection.module';

@Module({
  imports: [DbconectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
