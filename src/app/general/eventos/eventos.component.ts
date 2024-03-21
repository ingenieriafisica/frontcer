import { Component,OnInit} from '@angular/core';
import { EventosService } from './eventos.service';
import { Eventos } from './eventos';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: Eventos[] = [];

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe(eventos => {
      this.eventos = eventos;
    });
  }
}