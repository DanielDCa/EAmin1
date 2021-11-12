import { ColectivoService } from './../../services/colectivo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-colectivo',
  templateUrl: './listar-colectivo.component.html',
  styleUrls: ['./listar-colectivo.component.css']
})
export class ListarColectivoComponent implements OnInit {

  colectivos = [];

  constructor(private colectivoService: ColectivoService,private router: Router) { }

  ngOnInit(): void {
    // this.getColectivos();
  }

  // deleteColectivo(id: string){
  //   this.colectivoService.deleteColectivo(id)
  //     .subscribe(res =>{

  //       this.getColectivos();

  //     },err=> console.log(err))
  // }
  // gotoUpdate(id: string){
  //   this.router.navigate(['/update-colectivo', id]);
  // }

  // getColectivos(){
  //   this.colectivoService.getColectivos()
  //     .subscribe(res=>{
  //       this.colectivos = res;
  //     }, err => console.log(err))
  // }

}
