const express = require('express')
const  router = express.Router()
const singupContoller = require('../controllers/signup_controller')

console.log('INFO: Signup  Router loaded.')

router.get('/signup',singupContoller.signup);






module.exports = router ;