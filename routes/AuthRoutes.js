const express = require("express");
const getAllUsers = require('../controller/auth')
const validate = require('../middleware/validator')

const router = express.Router();

router.get('/', getAllUsers.getUser);
router.post('/register', validate.validateUser, getAllUsers.createUser);
router.post('/login', getAllUsers.loginUser);

module.exports = router;