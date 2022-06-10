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
  protected id: string;
  @Column()
  protected nombre: string;

  @ManyToMany(() => DoctorEntity, {
    cascade: true,
  })
  @JoinTable()
  categories: DoctorEntity[];
}
