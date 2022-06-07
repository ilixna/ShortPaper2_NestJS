import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Doctor } from 'src/doctor/doctor.entity';
import { Sexo } from 'src/sexo/sexo.entity';
import { Especialidad } from "../especialidad/especialidad.entity";

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'sqlite',
        database: 'bd.sqlite',
        entities: [Doctor,Especialidad,Sexo],
        synchronize: true,
    })],
  controllers: [],
  providers: [],
})
export class DbconectionModule {}
