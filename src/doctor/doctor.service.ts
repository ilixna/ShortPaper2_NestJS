import { Inject, Injectable } from '@nestjs/common';
import { BusquedaRepository } from './doctor.repository';
import { Doctor } from './doctor.model';
import { EspecialidadDto } from './dtos/especialidad.busqueda';

@Injectable()
export class DoctorService {
  constructor(
    @Inject('IBusqueda')
    private busquedaRepositorio: BusquedaRepository,
  ) {}

  async busquedaDoctores(): Promise<Doctor[]> {
    return await this.busquedaRepositorio.busqueda();
  }

  async busquedaFiltradaDoctores(filtro: EspecialidadDto): Promise<Doctor[]> {
    return await this.busquedaRepositorio.busquedaFiltrada(filtro);
  }
}
