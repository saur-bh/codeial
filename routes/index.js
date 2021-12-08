const express = require('express')
const  router = express.Router()
const homeController = require('../controllers/home_controller')

console.log('INFO: Router loaded.')


router.get('/',homeController.home)
router.use('/users', require('./user'))
router.use('/users', require('./post'))

module.exports = router