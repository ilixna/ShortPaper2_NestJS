import { Doctor } from 'src/doctor/doctor.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany,JoinTable} from 'typeorm';

@Entity()
export class Especialidad {
    @PrimaryGeneratedColumn()
    id: number;
       
    @Column()
    nombre: string;

    @ManyToMany(() => Doctor, { 
        cascade: true 
    })

@JoinTable()
categories: Doctor[];

}
