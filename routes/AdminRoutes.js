const express = require("express");
const adminTrx = require('../controller/admin')
const validate = require('../middleware/validator')

const router = express.Router();

router.get('/',adminTrx.getTrx)
router.post('/', validate.authenticateAdmin ,adminTrx.createTrx)
router.put('/:id', validate.authenticateAdmin, adminTrx.updateStatusTrx)
router.delete('/:id', validate.authenticateAdmin, adminTrx.deleteTrx)

module.exports = router;