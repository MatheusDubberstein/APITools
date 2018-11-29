const express = require('express');
const routes = express.Router();

const ToolController = require('./controllers/ToolController');

routes.get('/tools', ToolController.listAll);
routes.post('/tools', ToolController.register);
routes.get('/tool', ToolController.listTag);
routes.delete('/tools/:id', ToolController.delete);

module.exports = routes;