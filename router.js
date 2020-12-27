const express = require('express');
const router = express.Router();
const UserController = require('./userController')

router.post('/login', UserController.addInputData)





module.exports = router;