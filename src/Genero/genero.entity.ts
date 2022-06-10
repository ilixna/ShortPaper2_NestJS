import { DoctorEntity } from 'src/doctor/doctor.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Genero } from './genero.model';

@Entity()
export class GeneroEntity extends Genero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Genero: string;

  @OneToMany(() => DoctorEntity, (doctor) => doctor.genero)
  doctores: DoctorEntity[];
}
