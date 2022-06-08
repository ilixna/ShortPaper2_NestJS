import { Persona } from 'src/persona/persona.abstract';

export class Doctor extends Persona {
  protected id: string;
  protected nombre: string;
  protected apellido: string;
  imagen: string;
}
