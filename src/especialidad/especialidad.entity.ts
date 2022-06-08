import { DoctorEntity } from 'src/doctor/doctor.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class EspecialidadEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;

  @ManyToMany(() => DoctorEntity, {
    cascade: true,
  })
  @JoinTable()
  categories: DoctorEntity[];
}
