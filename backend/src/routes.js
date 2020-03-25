/*        const params = request.()
  Query Param: Pra nomeação (request.query)
  Route Param: ID Param (request.params, /:id)
  Request Body: Corpo da requisição, criar ou alterar resources (request.body) 
 */

/*
  SQL; mySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server, etc.
  NoSQL: MongoDB, CouchDB, etc
 */

 /*
  Driver: SELECT * FROM users
  Query Builder: table('users').select('*').where()
 */

const express = require('express');
const routes = express.Router();
const ongcontroller = require('./controllers/ongcontroller');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController')

routes.post('/session', sessionController.create)

routes.get('/ongs', ongcontroller.index);
routes.post('/ongs', ongcontroller.create);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;