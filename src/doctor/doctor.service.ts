import { Inject, Injectable } from '@nestjs/common';
import { Doctor } from './doctor.model';
import { EspecialidadDto } from './dtos/especialidad.busqueda';
import { IBusqueda } from 'src/busqueda/IBusqueda';

@Injectable()
export class DoctorService {
  constructor(
    @Inject('IBusqueda')
    private busquedaRepositorio: IBusqueda<EspecialidadDto, Doctor>,
  ) {}

  async busquedaDoctores(): Promise<Doctor[]> {
    return await this.busquedaRepositorio.busqueda();
  }

  async busquedaFiltradaDoctores(filtro: EspecialidadDto): Promise<Doctor[]> {
    return await this.busquedaRepositorio.busquedaFiltrada(filtro);
  }
}
