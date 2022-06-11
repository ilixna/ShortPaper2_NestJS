import { Inject, Injectable } from '@nestjs/common';
import { IBusqueda } from 'src/busqueda/IBusqueda';
import { Especialidad } from 'src/especialidad/especialidad.model';
import { BusquedaRepository } from './doctor.repository';
import { Doctor } from './doctor.model';
import { EspecialidadEntity } from 'src/especialidad/especialidad.entity';
import { EspecialidadDto } from './dtos/especialidad.busqueda';

@Injectable()
export class DoctorService {

}