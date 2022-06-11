import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Especialidad } from 'src/especialidad/especialidad.model';
import { EspecialidadDto } from './dtos/especialidad.busqueda';
import { DoctorService } from './doctor.service';
import { BusquedaRepository } from './doctor.repository';
@Controller('doctor')
export class DoctorController {
  constructor(private readonly appService: DoctorService) {}
}