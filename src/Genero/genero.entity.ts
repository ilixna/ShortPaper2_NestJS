import { DoctorEntity } from 'src/doctor/doctor.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class GeneroEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Genero: string;

  @OneToMany(() => DoctorEntity, (doctor) => doctor.genero)
  doctores: DoctorEntity[];
}
