import { Persona } from 'src/persona/persona.abstract';
import { GeneroEntity } from 'src/sexo/sexo.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Doctor } from './doctor.model';
@Entity()
export class DoctorEntity extends Doctor {
  @PrimaryGeneratedColumn()
  protected id: string;

  @Column()
  protected nombre: string;

  @Column()
  protected apellido: string;

  @Column()
  imagen: string;

  @ManyToOne(() => GeneroEntity, (sexo) => sexo.doctores)
  @JoinColumn({ name: 'sexo_id' })
  sexo: GeneroEntity;
}
