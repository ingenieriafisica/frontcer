import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Eventos } from './general/eventos/eventos';

@Injectable({
  providedIn: 'root'
})

export class StrapiService {
  private apiUrl = 'http://82.197.93.184:1337/api'; // Adjust URL as needed

  constructor(private http: HttpClient) { }



}