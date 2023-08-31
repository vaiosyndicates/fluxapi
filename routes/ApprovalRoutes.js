const express = require("express");
const approvalTrx = require('../controller/approval')
const validate = require('../middleware/validator')

const router = express.Router();

router.get('/users', validate.authenticateTrx, approvalTrx.getUsers)
router.get('/users/:id/articles', validate.authenticateTrx, approvalTrx.getPostbyID)
router.get('/users/:id/articles/tag', validate.authenticateTrx, approvalTrx.getPostbyTag)
router.get('/users/:iduser/articles/:idarticle', validate.authenticateTrx, approvalTrx.getDetailPost)
router.put('/users/:iduser/articles/:idarticle', validate.authenticateTrx, approvalTrx.updateStatusPost)

module.exports = router;