import { DoctorEntity } from 'src/doctor/doctor.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { especialidad } from './especialidad.model';

@Entity()
export class EspecialidadEntity extends especialidad {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  nombre: string;
}
