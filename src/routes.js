const express = require('express');
const authMiddleware = require("./middlewares/auth");

const routes = express.Router();


const ToolController = require('./controllers/ToolController');
const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');

//Rota de Autenticação
routes.post('/authenticate', AuthController.auth);

routes.use(authMiddleware);


//Rotas de Ferramentas
routes.get('/tools', ToolController.list);
routes.post('/tools', ToolController.register);
routes.delete('/tools/:id', ToolController.delete);

//Rotas de Usuarios
routes.post('/user', UserController.register);
routes.get('/user', UserController.list);
routes.delete('/user/:id', UserController.delete);



module.exports = routes;