import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from 'src/doctor/doctor.entity';
import { GeneroEntity } from 'src/Genero/genero.entity';
import { EspecialidadEntity } from '../especialidad/especialidad.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bd.sqlite',
      entities: [DoctorEntity, EspecialidadEntity, GeneroEntity],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class DbconectionModule {}
