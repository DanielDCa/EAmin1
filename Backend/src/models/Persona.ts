import { Document, Schema, model, SchemaTypes } from "mongoose";

interface IPersona extends Document {
    nombre: string;
}
const personaSchema = new Schema({
        nombre: String
});

export default model<IPersona>("Persona", personaSchema);