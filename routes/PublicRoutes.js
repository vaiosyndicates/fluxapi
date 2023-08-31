const express = require("express");
const getAllPublic = require('../controller/public')

const router = express.Router();

router.get('/articles', getAllPublic.getPostPublic )
router.get('/articles/tags', getAllPublic.getPostbyTagging )
router.get('/articles/:idarticle', getAllPublic.getPostDetailbyId )
router.get('/articles/startDate/:start/endDate/:end', getAllPublic.getPostbyDaterange )



module.exports = router;