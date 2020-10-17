import { Router } from 'express';
import DisciplinaController from '../app/controllers/DisciplinaController';
import disciplinaValidation from '../app/validators/disciplinaValidation';


const disciplinaRoutes = new Router();

disciplinaRoutes.get('/', DisciplinaController.index);
disciplinaRoutes.get('/:id', DisciplinaController.show);
disciplinaRoutes.post('/', disciplinaValidation, DisciplinaController.store);
disciplinaRoutes.put('/:id', disciplinaValidation, DisciplinaController.update);
disciplinaRoutes.delete('/:id', DisciplinaController.delete);

export default disciplinaRoutes;
