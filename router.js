const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')

// creating controller files will allow us to modularize the logic/code
// e.g.,
// router.post('/create-post', postController.create)
// router.post('/login', userController.login)

router.get('/', userController.home)
router.post('/register', userController.register)

module.exports = router