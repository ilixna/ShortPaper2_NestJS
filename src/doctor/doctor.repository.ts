import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EspecialidadDto } from './dtos/especialidad.busqueda';
import { IBusqueda } from 'src/busqueda/IBusqueda';
import { Repository } from 'typeorm';
import { DoctorEntity } from './doctor.entity';
import { Doctor } from './doctor.model';

@Injectable()
export class BusquedaRepository implements IBusqueda<EspecialidadDto, Doctor> {
  constructor(
    @InjectRepository(DoctorEntity)
    private doctorRepository: Repository<DoctorEntity>,
  ) {}

  async busquedaFiltrada(filtro: EspecialidadDto): Promise<DoctorEntity[]> {
    return await this.doctorRepository
      .createQueryBuilder('doctor')
      .leftJoinAndSelect('doctor.categories', 'category')
      .leftJoinAndSelect('doctor.genero', 'gender')
      .where('category.nombre like :nombre', { nombre: `%${filtro.nombre}%` })
      .orWhere('category.nombre2 like :nombre2', {
        nombre2: `%${filtro.nombre}%`,
      })
      .getMany();
  }

  async busqueda(): Promise<Doctor[]> {
    return await this.doctorRepository.find({
      relations: ['categories', 'genero'],
    });
  }
}
