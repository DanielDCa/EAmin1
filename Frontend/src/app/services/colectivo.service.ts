//import { Colectivo } from '../interfaces/Evento';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ColectivoService {

  URI:string = 'http://localhost:4000/api/colectivos';
  constructor(private http:HttpClient) { }

  createColectivo(nombre:string,descripcion:string,vacuna:string){
    //const fd = new FormData();
    /*
    fd.append('nombre',nombre);
    fd.append('descripcion',descripcion);
    fd.append('vacuna',vacuna);*/
    const payload ={nombre,descripcion,vacuna}
    return this.http.post(this.URI, payload);

  }
 /* getColectivos(){
     return this.http.get<Colectivo[]>(this.URI);
  }
  deleteColectivo(id: string){
    console.log("Desde delete colectivo"+id);
    return this.http.delete(`${this. URI}/${id}`);
  }
  getColectivo(id: string){
    return this.http.get<Colectivo>(`${this. URI}/${id}`);
  }
  updateColectivo(id:string,nombre: string, descripcion:string,vacuna: string){
    return this.http.put(`${this.URI}/${id}`,{nombre,descripcion,vacuna})
  }*/
}
