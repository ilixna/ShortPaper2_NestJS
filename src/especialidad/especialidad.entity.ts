import { DoctorEntity } from 'src/doctor/doctor.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Especialidad } from './especialidad.model';

@Entity()
export class EspecialidadEntity extends Especialidad {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  nombre: string;
  @Column()
  nombre2: string;
}
