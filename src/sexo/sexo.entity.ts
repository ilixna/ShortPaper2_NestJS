import { DoctorEntity } from 'src/doctor/doctor.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class SexoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sexo: string;

  @OneToMany(() => DoctorEntity, (doctor) => doctor.sexo)
  doctores: DoctorEntity[];
}
