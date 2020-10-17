import express from 'express';
import routes from './routes';
import dbConnection from './database';
import serverConfig from './config/server'

dbConnection();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(serverConfig.port);
