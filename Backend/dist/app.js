"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const index_1 = __importDefault(require("./routes/index"));
//Settings
app.set('port', process.env.PORT || 4000);
//Middlewares
app.use((0, morgan_1.default)('dev')); //Esto nos mostrara mensajes por consola de peticiones de los usuarios
app.use((0, cors_1.default)()); //Nos permite trabajar con los dos servidores diferentes
app.use(express_1.default.json()); //Gracias a este metodo voy a poder entender los datos que me estan enviando Json
//Routes
app.use('/api', index_1.default); //La ruta /api sera manejado por indexRoutes (routes/index.ts)
exports.default = app;
