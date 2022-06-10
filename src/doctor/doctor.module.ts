import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { BusquedaRepository } from './doctor.repository';
import { Especialidad } from 'src/especialidad/especialidad.model';
import { Doctor } from './doctor.model';
import { DoctorEntity } from './doctor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  exports: [
    {
      provide: 'IBusqueda',
      useClass: BusquedaRepository,
    },
  ],
  imports: [TypeOrmModule.forFeature([DoctorEntity])],
  controllers: [DoctorController],
  providers: [
    DoctorService,
    BusquedaRepository,
    {
      provide: 'IBusqueda',
      useClass: BusquedaRepository,
    },
  ],
})
export class DoctorModule {}
