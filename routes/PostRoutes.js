const express = require("express");
const getAllPost = require('../controller/post')
const getAllTrash = require('../controller/trash')
const validate = require('../middleware/validator')

const router = express.Router();

router.get('/:iduser/articles/all', validate.validateTrx , getAllPost.getPostByIdUser )
router.get('/:iduser/articles/:idarticle', validate.validateTrx , getAllPost.getPostDetailbyId )
router.get('/:iduser/tag/articles', validate.validateTrx , getAllPost.getPostbyTagging)
router.post('/:iduser/articles', validate.validateTrx , getAllPost.createPost )
router.put('/:iduser/articles/:idarticle', validate.validateTrx , getAllPost.updatePost )
router.delete('/:iduser/articles/:idarticle', validate.validateTrx , getAllPost.deletePost )

//trash
router.get('/:iduser/trash/all', validate.validateTrx , getAllTrash.getTrash )
router.put('/:iduser/trash/:idtrash/restore', validate.validateTrx , getAllTrash.restoreFromTrash )



module.exports = router;