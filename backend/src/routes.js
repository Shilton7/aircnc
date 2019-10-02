const express = require('express')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

// queryString (filtros) = usar query
// parametros = usar params
// body = req.body

routes.post('/sessions', SessionController.store)



module.exports = routes
