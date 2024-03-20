import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Eventos } from './eventos';

const endpoint = 'https://localhost:3300/';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  Eventos: Eventos[] = [];

  constructor(private httpClient: HttpClient) {}

  getEventos(): Observable<any> {
    return this.httpClient
      .get<Eventos>(endpoint + 'events')
      .pipe(catchError(this.handleError));
  }

  getEvento(id: string): Observable<any> {
    return this.httpClient
      .get<Eventos>(endpoint + 'events/' + id)
      .pipe(catchError(this.handleError));
  }

  deleteEvento(id: string): Observable<any> {
    return this.httpClient
      .delete<Eventos>(endpoint + 'events/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return console.log('Something bad happened; please try again later.');
  }
}
