//import { Colectivo } from '../../interfaces/Evento';
import { ColectivoService } from './../../services/colectivo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-colectivo',
  templateUrl: './update-colectivo.component.html',
  styleUrls: ['./update-colectivo.component.css']
})
export class UpdateColectivoComponent implements OnInit {

  colectivoForm : FormGroup;
  //colectivo : Colectivo;
  constructor(private activatedRoute : ActivatedRoute, private colectivoService: ColectivoService,private fb:FormBuilder, private router:Router) {

  }



  ngOnInit(): void {
    /*this.activatedRoute.params.subscribe(params => {

      const id = params['id'];
      this.colectivoService.getColectivo(id)
        .subscribe(res => {
          this.colectivo = res;


          this.colectivoForm = this.fb.group({
            nombre:[this.colectivo.nombre,Validators.required],
            descripcion:[this.colectivo.descripcion,Validators.required],
            vacuna:[this.colectivo.vacuna,Validators.required]

          })
        }, err => console.log(err))

    })*/
  }

  editColectivo(){
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
