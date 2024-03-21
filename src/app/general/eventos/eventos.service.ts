import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError , map} from 'rxjs';
import { Eventos } from './eventos';

const endpoint = 'http://82.197.93.184:3333/api/';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  eventos: Eventos[] = [];

  constructor(private http: HttpClient) { }

  getEventos(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(endpoint + 'events').pipe(
      map((respuesta: Eventos[]) => {
        console.log('eventos: ', respuesta);
        return respuesta;
      }),
      catchError((error: any) => {
        console.error('An error occurred:', error);
        throw error;
      })
    );
  }
  
}
