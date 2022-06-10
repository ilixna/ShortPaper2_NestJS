import { Controller, Get } from '@nestjs/common';

@Controller('doctor')
export class DoctorController {
  @Get()
  getHello(): any {
    return 'Hola mundo';
  }
}
