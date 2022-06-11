import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbconectionModule } from './dbconection/dbconection.module';
import { DoctorController } from './doctor/doctor.controller';
import { DoctorModule } from './doctor/doctor.module';
import { DoctorService } from './doctor/doctor.service';

@Module({
  imports: [DbconectionModule, DoctorModule],
  controllers: [AppController, DoctorController],
  providers: [
    AppService,
    DoctorService,
    { provide: APP_PIPE, useClass: ValidationPipe },
  ],
})
export class AppModule {}
