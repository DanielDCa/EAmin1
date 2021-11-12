import {Request,Response} from 'express'
import path from 'path'

import Evento from '../models/Evento'
import Persona from '../models/Persona';

export async function getEventos(req:Request, res: Response):Promise<Response>{
    const eventos = await Evento.find();
    return res.json(eventos);
}
export async function getEvento(req: Request, res: Response): Promise<Response>{
    //Recogemos el parametro que encontramos en 
    //la ruta /api/:id
    const {id} = req.params;
    const evento = await Evento.findById(id);
    return res.json(evento);
}
export async function updateEvento(req: Request, res: Response):Promise<Response>{
    const {id} = req.params;
    const {nombre,loacalizacion,fecha ,latitud, longitud,descripcion,personas} = req.body;
    //console.log(nombre);
    const updatedEvento = await Evento.findByIdAndUpdate(id,{
        nombre,
        loacalizacion,
        fecha,
        latitud,
        longitud,
        descripcion,
        personas

    }, {new: true});
    return res.json({
        message:'Succesfully Updated',
        updatedEvento
    })
}
export async function createEvento(req: Request, res: Response): Promise<Response>{
    //Todo lo que hemos pescado del request Body
    const {nombre, localizacion,fecha,latitud,longitud,descripcion, personas} = req.body;
    console.log(req.body);
   // const fec = new Date(fecha);
    //Los datos recogidos anteriormente lo almacenamos en una constante
    const newEvento ={
        nombre,
        localizacion,
        fecha,
        latitud,
        longitud,
        descripcion,
        personas
       
    };
    const evento = new Evento(newEvento);
    await evento.save();

    return res.json({
        message: 'Colectivo succesfully saved',
        evento
    });
}
export async function createPersona(req: Request, res: Response): Promise<Response>{
    //Todo lo que hemos pescado del request Body
    const {nombre} = req.body;
  
    //Los datos recogidos anteriormente lo almacenamos en una constante
    const newPersona ={
        nombre
    };
    const persona = new Persona(newPersona);
    await persona.save();

    return res.json({
        message: 'Colectivo succesfully saved',
        persona
    });
}
export async function getPersonas(req:Request, res: Response):Promise<Response>{
    const persona = await Persona.find();
    return res.json(persona);
}