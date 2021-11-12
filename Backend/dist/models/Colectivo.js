"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    nombre: String,
    descripcion: String,
    vacuna: String
});
//La interfaz herda de Document
exports.default = (0, mongoose_1.model)('Colectivo', schema);
//Aqui estamos diciendo que este modelo debe cumplir con la estructura de la 
//interfaz colectivo
