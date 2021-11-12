import {Schema, model, Document} from 'mongoose'

//Los esquemas sirven como guias de la estructura de los documentos 
const schema =new Schema({ 
    nombre: String,
    descripcion: String,
    vacuna: String
    
});
//Descripcion de un objeto para que typescript sepa como que ese dato(schema) 
//esta conformado por muchos atributos, entonces lo hace con una interfaz(lo trata como objeto)
interface IColectivo extends Document{
    nombre: string,
    descripcion: string,
    vacuna: string
}
//La interfaz hereda de Document, esto agregará las funciones y campos requeridos a la interfaz, como guardar (), eliminar (),

export default model<IColectivo>('Colectivo',schema)
//Aqui estamos exportando este modelo, y tambien debe cumplir con la estructura de la 
//interfaz colectivo