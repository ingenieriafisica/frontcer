import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventos } from './eventos';

const endpoint = 'http://82.197.93.184:3300/';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  eventos: Eventos[] = [];

  constructor(private http: HttpClient) { }
  getEventos(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(endpoint + 'events');
  }

}
