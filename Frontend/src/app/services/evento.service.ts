import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Evento} from '../interfaces/Evento'

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  URI:string = 'http://localhost:4000/api/eventos';
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
  getEventos(){
     return this.http.get<Evento[]>(this.URI);
  }

  getEvento(id: string){
    return this.http.get<Evento>(`${this. URI}/${id}`);
  }
  updateEvento(id:string,nombre: string,localizacion: string,fecha :Date, latitud:string,longitud:string,descripcion:string,personas:[]){
    return this.http.put(`${this.URI}/${id}`,{nombre,localizacion,fecha,latitud,longitud,descripcion,personas})
  }
}
