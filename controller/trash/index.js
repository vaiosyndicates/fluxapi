const postService = require("../../service/post")
const trashService = require("../../service/trash")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const trashController = {
  getTrash: async (req, res) => {
    try {
      const post = await trashService.getAllTrash();
      if(post.length > 0) {

        res.status(200).json({ 
          responseCode: 200,
          message: "success", 
          data: post, 
        });

      } else {
        res.status(404).json({ 
          responseCode: 404,
          message: "Article not found", 
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  restoreFromTrash: async (req, res) => {
    const { idtrash, iduser } = req.params
    // console.log(`id trash ${idtrash}`)
    try {
      const searchTrash = await trashService.getTrashbyID(idtrash)

      if(searchTrash) {
        const restore = await trashService.deleteTrashbyId(idtrash)
        if(restore) {
          let searchPost = await postService.getDetailPostRestore(searchTrash.idArticle, iduser)
          if(searchPost) {
            const payload = {
              isDeleted: !searchPost.isDeleted,
              updatedAt: new Date()
            }
            const updateStatus = await postService.softDeletePost(searchTrash.idArticle, searchTrash.iduser, payload)
            if(updateStatus) {
              res.status(200).json({ 
                responseCode: 200, 
                messages: "Success Restore",
              });
            } else {
              res.status(500).json({ 
                responseCode: 500, 
                messages: "Restore Failed",
              });
            }
           
          } else {
            res.status(404).json({ 
              responseCode: 404, 
              status: "failed",
              message: 'Article ID not found'
            });
          }
        } else {
          res.status(500).json({
            responseCode: 404,
            status: "Failed restore",
         });
        }
      } else {
        res.status(500).json({
          responseCode: 500,
          status: "Failed deleted from trash",
       });
      }
    

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
}

module.exports = trashController;