const express = require("express");
const getAllTrx = require('../controller/transfer')
const validate = require('../middleware/validator')

const router = express.Router();

router.get('/',getAllTrx.getTrx)
router.post('/', validate.validateTrx, getAllTrx.createTrx)

module.exports = router;