import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError , map} from 'rxjs';
import { News } from './news';

const endpoint = 'http://127.1.1.0:3300/';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  News: News[] = [];

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(endpoint + 'events').pipe(
      map((respuesta: News[]) => {
        console.log('News: ', respuesta);
        return respuesta;
      }),
      catchError((error: any) => {
        console.error('An error occurred:', error);
        throw error;
      })
    );
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
