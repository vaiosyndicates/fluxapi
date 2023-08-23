const express = require("express");
const approvalTrx = require('../controller/approval')
const validate = require('../middleware/validator')

const router = express.Router();

router.get('/',approvalTrx.getTrx)
router.put('/:id', validate.authenticateTrx, approvalTrx.updateStatusTrx)

module.exports = router;