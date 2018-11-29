const express = require('express');
const routes = express.Router();

const ToolController = require('./controllers/ToolController');

routes.get('/tools', ToolController.list);
routes.post('/tools', ToolController.register);
routes.delete('/tools/:id', ToolController.delete);

module.exports = routes;