import { Router } from 'express';
import disciplinaRoutes from './disciplina.routes'


const routes = new Router();

routes.use('/disciplinas', disciplinaRoutes);

export default routes;
