import {connect} from 'mongoose';

export async function startConnection(){
    //Cambiar BD
    await connect('mongodb://localhost/eventos-db',{
        
    }) ;
    console.log('Database is connected');
}
