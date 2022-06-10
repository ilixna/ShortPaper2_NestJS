import { Persona } from 'src/persona/persona.abstract';
import { Genero } from 'src/Genero/genero.model';

export class Doctor extends Persona {
  protected id: string;
  protected nombre: string;
  protected apellido: string;
  imagen: string;
  genero: Genero;
}
