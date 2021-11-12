import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express();
import indexRoutes from './routes/index'

//Settings
app.set('port',process.env.PORT ||4000);

//Middlewares
app.use(morgan('dev')); //Esto nos mostrara mensajes por consola de peticiones de los usuarios
app.use(cors()); //Nos permite trabajar con los dos servidores diferentes
app.use(express.json());//Gracias a este metodo voy a poder entender los datos que me estan enviando Json

//Routes
app.use('/api', indexRoutes) //La ruta /api sera manejado por indexRoutes (routes/index.ts)


export default app;