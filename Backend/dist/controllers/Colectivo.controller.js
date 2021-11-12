"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteColectivo = exports.createColectivo = exports.getColectivos = void 0;
const Colectivo_1 = __importDefault(require("../models/Colectivo"));
async function getColectivos(req, res) {
    const photos = await Colectivo_1.default.find();
    return res.json(photos);
}
exports.getColectivos = getColectivos;
async function createColectivo(req, res) {
    //Todo lo que hemos pescado del request Body
    const { nombre, descripcion, vacuna } = req.body;
    console.log(nombre);
    //Los datos recogidos anteriormente lo almacenamos en una constante
    const newColectivo = {
        nombre: nombre,
        descripcion: descripcion,
        vacuna: vacuna
    };
    const colectivo = new Colectivo_1.default(newColectivo);
    await colectivo.save();
    return res.json({
        message: 'Colectivo succesfully saved',
        colectivo
    });
}
exports.createColectivo = createColectivo;
async function deleteColectivo(req, res) {
    //Recogemos el parametro que encontramos en 
    //la ruta /api/:id
    const { id } = req.params;
    const colectivo = await Colectivo_1.default.findByIdAndRemove(id);
    return res.json({
        message: 'Colectivo Deleted',
        colectivo
    });
}
exports.deleteColectivo = deleteColectivo;
