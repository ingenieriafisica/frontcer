interface EventosInterface {
  nombre: string;
  fecha: Date;
  lugar: string;
  asistentes: string[];
  descripcion?: string;
}

export class Eventos implements EventosInterface {
  nombre: string;
  fecha: Date;
  lugar: string;
  asistentes: string[];
  descripcion?: string;

  constructor(nombre: string, fecha: Date, lugar: string, asistentes: string[], descripcion?: string) {
      this.nombre = nombre;
      this.fecha = fecha;
      this.lugar = lugar;
      this.asistentes = asistentes;
      this.descripcion = descripcion;
  }
}
