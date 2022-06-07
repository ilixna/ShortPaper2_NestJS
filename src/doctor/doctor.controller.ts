import { Controller, Get } from '@nestjs/common';
import {DoctorService} from "./doctor.service";
@Controller('doctor')
export class DoctorController {
    constructor(private readonly appService: DoctorService) {}
    @Get()
    getHello(): string {
      return this.appService.getHello();
    }
}
