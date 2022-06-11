import { Persona } from 'src/persona/persona.abstract';
import { Genero } from 'src/Genero/genero.model';

export class Doctor extends Persona {
  id: string;
  nombre: string;
  apellido: string;
  imagen: string;
  genero: Genero;
}
