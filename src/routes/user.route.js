const route = require('express').Router()
const userController = require('../controllers/user.controllers')

route.get('/', userController.nome)

module.exports = route;