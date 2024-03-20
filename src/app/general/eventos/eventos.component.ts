import { Component,OnInit} from '@angular/core';
import { StrapiService } from 'src/app/strapi.service';
import { Eventos,Attributes } from './eventos';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit{
  eventos: Eventos[]=[];

  constructor(private strapiService: StrapiService) { }

  ngOnInit(): void {
    this.strapiService.getEventData().subscribe(
      eventData => this.eventos = eventData
    );
  }


}
