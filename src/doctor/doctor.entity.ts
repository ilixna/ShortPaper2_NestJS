import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, Connection } from 'typeorm';

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

  @Column()
  sexo: string;


}


