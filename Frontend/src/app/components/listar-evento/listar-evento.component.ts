import { EventoService } from './../../services/evento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styleUrls: ['./listar-evento.component.css']
})
export class ListarEventoComponent implements OnInit {

  eventos = [];

  constructor(private router: Router, private eventoservice:EventoService) { }

  ngOnInit(): void {
    this.getEvetos();
  }
  gotoUpdate(id: string){
    this.router.navigate(['/update-evento', id]);
  }
  getEvetos(){
    this.eventoservice.getEventos()
      .subscribe(res =>{
        this.eventos = res;
      }, err => console.log(err))
      // .subscribe(res=>{
      //   this.colectivos = res;
      // }, err => console.log(err))*/
  }

}
