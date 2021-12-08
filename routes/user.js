const express = require('express')
const { route } = require('.')
const  router = express.Router()
const userContoller = require('../controllers/user_contoller')

console.log('INFO: Home Router loaded.')

router.get("/",userContoller.users);
router.get('/profile',userContoller.profile);


module.exports = router ;