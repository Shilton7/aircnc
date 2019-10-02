const express = require('express')

const routes = express.Router();

// queryString (filtros) = usar query
// parametros = usar params
// body = req.body

routes.get('/users', (req, res) => {
    return res.json({ nome: req.query.nome })
})



module.exports = routes
