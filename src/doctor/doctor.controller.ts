import { Body, Controller, Get, Post } from '@nestjs/common';
import { Especialidad } from 'src/especialidad/especialidad.model';
import { DoctorService } from './doctor.service';
import { BusquedaRepository } from './doctor.repository';
@Controller('doctor')
export class DoctorController {
  constructor(private readonly appService: DoctorService) {}
}