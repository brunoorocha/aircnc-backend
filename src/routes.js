const express = require('express')

const multer = require('multer')
const uploadConfig = require('./config/upload')

const routes = express.Router()
const upload = multer(uploadConfig)

// CONTROLLERS
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

routes.get('/', (req, res) => res.json({ message: 'Welcome to the AirCNC API ☕️' }))
routes.post('/sessions', SessionController.store)

routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.post('/spots/:spot_id/bookings', BookingController.store)

routes.get('/dashboard', DashboardController.show)

module.exports = routes