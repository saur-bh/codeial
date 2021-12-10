const express = require('express')
const { route } = require('.')
const  router = express.Router()
const userContoller = require('../controllers/user_contoller')

console.log('INFO: Home Router loaded.')
router.get('/',userContoller.users)
router.get('/profile',userContoller.profile);
router.get('/login',userContoller.login);
router.get('/signup',userContoller.signup);
router.post('/create',userContoller.userCreate);



module.exports = router ;