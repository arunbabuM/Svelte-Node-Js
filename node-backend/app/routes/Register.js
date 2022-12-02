const express = require("express");
const router = express.Router();
const registerController = require('../controllers/Register.Controller')


// router.post('/register', registerController.registerUser);
router.get('/',registerController.registerUser)
router.post('/login', registerController.registerUser);

module.exports = router