const route = require('express').Router()
const userController = require('../controllers/user.controllers')
const  { validId, validUser } = require("../middlewares/global.middlewares")

route.post('/', userController.create) 
route.get('/users', userController.findAll) 
route.get('/:id', validId , validUser, userController.findById) 
route.patch('/:id', validId , validUser, userController.update)
route.delete('/:id', validId, validUser, userController.deleteUser)

module.exports = route;