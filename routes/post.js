const express = require('express')
const  router = express.Router()
const postController = require('../controllers/post_controller')

console.log('INFO: Post Router loaded.')

router.get('/profile/post',postController.post);






module.exports = router ;