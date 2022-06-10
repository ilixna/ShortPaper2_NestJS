import { DoctorEntity } from 'src/doctor/doctor.entity';
import { Genero } from './genero.model';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';


@Entity()
export class GeneroEntity extends Genero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Genero: string;

  @OneToMany(() => DoctorEntity, (doctor) => doctor.genero)
  doctores: DoctorEntity[];
}
