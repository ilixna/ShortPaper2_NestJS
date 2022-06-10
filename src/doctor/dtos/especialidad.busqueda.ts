import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class EspecialidadDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
