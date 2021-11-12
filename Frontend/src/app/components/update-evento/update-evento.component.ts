import { EventoService } from './../../services/evento.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/interfaces/Evento';

@Component({
  selector: 'app-update-evento',
  templateUrl: './update-evento.component.html',
  styleUrls: ['./update-evento.component.css']
})
export class UpdateEventoComponent implements OnInit {

  eventoForm : FormGroup;
  evento : Evento;
  constructor(private activatedRoute : ActivatedRoute, private eventoService: EventoService,private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      const id = params['id'];
      this.eventoService.getEvento(id)
        .subscribe(res => {
          this.evento = res;


          this.eventoForm = this.fb.group({
            nombre:[this.evento.nombre,Validators.required],
            localizacion:[this.evento.localizacion,Validators.required],
            fecha:[this.evento.fecha,Validators.required],
            latitud:[this.evento.latitud,Validators.required],
            longitud:[this.evento.longitud,Validators.required],
            descripcion:[this.evento.descripcion,Validators.required],

          })
        }, err => console.log(err))

    })
  }

  editEvento(){
    /*
    //const colectivo : Colectivo={
     // let id  = this.colectivo._id;
      let nombre = this.colectivoForm.get('nombre')?.value;
      let descripcion = this.colectivoForm.get('descripcion')?.value;
      let vacuna = this.colectivoForm.get('vacuna')?.value;

      console.log("eeeeee"+this.colectivo._id);
    //}
    this.colectivoService.updateColectivo(this.colectivo._id,nombre,descripcion,vacuna)
      .subscribe(res => {
        this.router.navigate(["/"]);
      },
      err =>console.log(err) )*/
  }

}
