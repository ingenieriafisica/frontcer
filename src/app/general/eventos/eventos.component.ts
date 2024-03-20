import { Component,OnInit} from '@angular/core';
import { EventosService } from './eventos.service';
import { Eventos } from './eventos';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit{
  eventos: Eventos[]=[];
  constructor(private  eventosService:  EventosService) { }

  ngOnInit(): void {
    this.loadEventos();
  }

  loadEventos(): void {
    this.eventosService.getEventos().subscribe((response: any) => {
      this.eventos = response;
      console.log(this.eventos);
    });
  }

  loadProduct(id: string): void {
    this.eventosService.getEvento(id).subscribe((response: any) => {
      this.eventos = response;
      console.log(this.eventos);
    });
  }

}
