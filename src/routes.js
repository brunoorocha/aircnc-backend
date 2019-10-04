const express = require('express')
const routes = express.Router()

// CONTROLLERS
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')

routes.get('/', (req, res) => res.json({ message: 'Welcome to the AirCNC API ☕️' }))
routes.post('/sessions', SessionController.store)

routes.get('/spots', SpotController.index)
routes.post('/spots', SpotController.store)

module.exports = routes