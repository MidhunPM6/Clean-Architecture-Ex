const express = require('express');
const router = express.Router();
const postController = require('../controller/postContoller')

router.post('/',postController.createPost)

module.exports=router