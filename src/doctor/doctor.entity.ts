import { EspecialidadEntity } from 'src/especialidad/especialidad.entity';
import { GeneroEntity } from 'src/genero/genero.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Doctor } from './doctor.model';
@Entity()
export class DoctorEntity extends Doctor {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  imagen: string;

  @ManyToOne(() => GeneroEntity, (Genero) => Genero.doctores)
  @JoinColumn({ name: 'genero_id' })
  genero: GeneroEntity;

  @ManyToMany(() => EspecialidadEntity, {
    cascade: true,
  })
  @JoinTable()
  categories: EspecialidadEntity[];
}
