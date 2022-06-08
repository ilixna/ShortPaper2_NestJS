import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { DbconectionModule } from '../dbconection/dbconection.module';

@Module({
  imports: [DbconectionModule, DoctorModule],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}
