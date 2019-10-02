const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const ProfileController = require('./controllers/ProfileController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router();
const upload = multer(uploadConfig)

// queryString (filtros) = usar query
// parametros = usar params
// body = req.body

//session
routes.post('/sessions', SessionController.store)

//spot
routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)

//profile spots
routes.get('/profile/spots', ProfileController.show)

//bookin
routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes
