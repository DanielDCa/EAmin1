import {Router} from 'express';
const router = Router();

import {getEventos,createEvento,updateEvento, createPersona, getPersonas, getEvento} from '../controllers/Evento.controller'
router.route('/eventos')
    .post(createEvento)
    .get(getEventos);

router.route('/eventos/:id')
    // .delete(deleteColectivo)
    .get(getEvento)
    .put(updateEvento);
    
router.route('/persona')
    .post(createPersona)
    .get(getPersonas);
    
    

export default router;