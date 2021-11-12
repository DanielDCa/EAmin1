import { ColectivoService } from './../../services/colectivo.service';
//import { Colectivo } from '../../interfaces/Evento';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-colectivo',
  templateUrl: './crear-colectivo.component.html',
  styleUrls: ['./crear-colectivo.component.css']
})
export class CrearColectivoComponent implements OnInit {

  colectivoForm : FormGroup;
  constructor(private fb:FormBuilder, private router: Router, private colectivoService: ColectivoService) {
    this.colectivoForm = fb.group({
      nombre:['',Validators.required],
      descripcion:['',Validators.required],
      vacuna:['',Validators.required]

    })
   }

  ngOnInit(): void {
  }

  /*addColectivo(){
    console.log(this.colectivoForm);
    //const colectivo : Colectivo={
      let nombre = this.colectivoForm.get('nombre')?.value;
      let descripcion = this.colectivoForm.get('descripcion')?.value;
      let vacuna = this.colectivoForm.get('vacuna')?.value;

      console.log(vacuna);
    //}
    this.colectivoService.createColectivo(nombre,descripcion,vacuna)
      .subscribe(res => {
        this.router.navigate(["/"]);
      },
      err =>console.log(err) )*/

  //}

}
