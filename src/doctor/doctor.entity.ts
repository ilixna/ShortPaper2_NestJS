import { Sexo } from 'src/sexo/sexo.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne} from 'typeorm';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  imagen: string;

  @ManyToOne(()=>Sexo,(sexo)=>sexo.doctores)
  @JoinColumn({name:'sexo_id'})
  sexo:Sexo;

}


