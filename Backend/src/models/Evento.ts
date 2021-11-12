import { Document, Schema, model, SchemaTypes } from "mongoose";
import Persona from './Persona'

interface IEvento extends Document {
    nombre: string;
    localizacion: string;
    fecha: Date;
    latitud: string;
    longitud: string;
    descripcion: string;
    personas: string[]
}

const eventoSchema = new Schema({
    nombre: String,
    localizacion: String,
    fecha: Date,
    latitud: String,
    longitud: String,
    descripcion: String,
    personas: [String]
});

export default model<IEvento>("Evento", eventoSchema);

