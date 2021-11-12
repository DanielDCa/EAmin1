import {Request,Response} from 'express'
import path from 'path'

import Colectivo from '../models/Colectivo'

export async function getColectivos(req:Request, res: Response):Promise<Response>{
    const photos = await Colectivo.find();
    return res.json(photos);
}
export async function getColectivo(req: Request, res: Response): Promise<Response>{
    //Recogemos el parametro que encontramos en 
    //la ruta /api/:id
    const {id} = req.params;
    const colectivo = await Colectivo.findById(id);
    return res.json(colectivo);
}
export async function createColectivo(req: Request, res: Response): Promise<Response>{
    //Todo lo que hemos pescado del request Body
    const {nombre, descripcion, vacuna} = req.body;
    console.log(req.body);
    //Los datos recogidos anteriormente lo almacenamos en una constante
    const newColectivo ={
        nombre:nombre,
        descripcion: descripcion,
        vacuna: vacuna
       
    };
    const colectivo = new Colectivo(newColectivo);
    await colectivo.save();

    return res.json({
        message: 'Colectivo succesfully saved',
        colectivo
    });
}
export async function deleteColectivo(req: Request, res: Response): Promise<Response>{
    //Recogemos el parametro que encontramos en 
    //la ruta /api/:id
    const {id} = req.params;
    const colectivo = await Colectivo.findByIdAndRemove(id);
    return res.json({
        message: 'Colectivo Deleted',
        colectivo
    });
}
export async function updateColectivo(req: Request, res: Response):Promise<Response>{
    const {id} = req.params;
    const {nombre, descripcion, vacuna} = req.body;
    console.log(nombre);
    const updatedColectivo = await Colectivo.findByIdAndUpdate(id,{
        nombre,
        descripcion,
        vacuna
    }, {new: true});
    return res.json({
        message:'Succesfully Updated',
        updatedColectivo
    })
}
