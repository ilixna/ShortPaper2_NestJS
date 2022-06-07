import { Doc } from 'prettier';
import { Doctor } from 'src/doctor/doctor.entity';
import { Entity, Column, PrimaryGeneratedColumn,JoinColumn, OneToMany} from 'typeorm';

@Entity()
export class Sexo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sexo: string;

  @OneToMany(()=>Doctor,(doctor)=>doctor.sexo)
  doctores: Doctor[];
}
