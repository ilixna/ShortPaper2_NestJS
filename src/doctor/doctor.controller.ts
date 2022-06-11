import { Controller, Get, Query } from '@nestjs/common';
import { EspecialidadDto } from './dtos/especialidad.busqueda';
import { DoctorService } from './doctor.service';
import { ResponseToReturn } from 'src/compartida/responsetoreturn';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get('/todos')
  async busquedaDoctores() {
    return ResponseToReturn(await this.doctorService.busquedaDoctores());
  }

  @Get()
  async buscarDoctorPorEspecialidad(@Query() especialidad: EspecialidadDto) {
    return ResponseToReturn(
      await this.doctorService.busquedaFiltradaDoctores(especialidad),
    );
  }
}
