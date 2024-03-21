import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Eventos } from './eventos';

const endpoint = 'http://localhost:3300/';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  eventos: Eventos[] = [];

  constructor(private http: HttpClient) {}
  getEventos(): Observable<any[]> {
    return this.http.get<any[]>(endpoint + 'events');
  }

}
