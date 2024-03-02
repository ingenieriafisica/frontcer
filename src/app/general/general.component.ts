import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Evento {
  id: number;
  Nombre: string;
  Cuerpo: string;
  Categoria: string;
  Fecha: string;
  Publicado: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  eventos: Evento[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.leerAPI();
  }

  leerAPI() {
    this.http.get<Evento[]>('https://cer-strapi.vbbfwf.easypanel.host/boletinposts')
      .subscribe((data: Evento[]) => {
        this.eventos = data; // Asigna los datos de la API a la variable 'eventos'
      }, (error) => {
        console.error('Error al leer la API:', error);
      });
  }

}



