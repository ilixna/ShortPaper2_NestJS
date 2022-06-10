import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EspecialidadDto } from './dtos/especialidad.busqueda';
import { IBusqueda } from 'src/busqueda/IBusqueda';
import { EspecialidadEntity } from 'src/especialidad/especialidad.entity';
import { Especialidad } from 'src/especialidad/especialidad.model';
import { Repository } from 'typeorm';
import { DoctorEntity } from './doctor.entity';
import { Doctor } from './doctor.model';


@Injectable()
export class BusquedaRepository implements IBusqueda<EspecialidadDto,Doctor>{

    constructor(
        @InjectRepository(DoctorEntity)
        private doctorRepository: Repository<DoctorEntity>,
      ) {}

    async busquedaFiltrada(filtro: EspecialidadDto): Promise<DoctorEntity[]> {
        return this.doctorRepository.createQueryBuilder('doctor')
            .leftJoinAndSelect('doctor.categories', 'category')
            .where('category.nombre like :nombre', { nombre: filtro.nombre })
            .getMany()
    }

    async busqueda(): Promise<Doctor[]> {
        return this.doctorRepository.find({relations: ['categories', 'genero']})
    }
}

/*
      return this._repository.createQueryBuilder()
        .leftJoinAndSelect("especialidad.categories", "categorie")
        .leftJoinAndSelect("categorie.doctor", "doctorr")
        .where("especialidad.nombre = :nombre", { name: filtro })
        .getMany()*/ 
