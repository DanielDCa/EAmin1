"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Colectivo_controller_1 = require("../controllers/Colectivo.controller");
router.route('/colectivos')
    .post(Colectivo_controller_1.createColectivo)
    .get(Colectivo_controller_1.getColectivos);
router.route('/colectivos/:id')
    .delete(Colectivo_controller_1.deleteColectivo);
exports.default = router;
