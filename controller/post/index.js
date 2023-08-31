const postService = require("../../service/post")
const trashService = require("../../service/trash")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const postController = {
  getPostByIdUser: async (req, res) => {
    const { iduser } = req.params
    try {
      const post = await postService.getAllPostByID(iduser);
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
  getPostbyTagging: async (req, res) => {
    const { iduser } = req.params
    const { tag } = req.body
    let params = []

    try {
      let splitTag = tag.split(",").map(function(item) {
        let clean = item.trim();
        return params.push(clean)
      });

      const trx = await postService.getPostbyTag(iduser, params);
      res.status(200).json({
         responseCode: 200,
         status: "success",
         data: trx 
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getPostDetailbyId: async (req, res) => {
    const { idarticle, iduser } = req.params

    try {

      const trx = await postService.getDetailPost(idarticle, iduser);
      res.status(200).json({
         responseCode: 200,
         status: "success",
         data: trx 
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createPost: async (req, res) => {
    try {
      const { idUser, title, excerpt, body, tag } = req.body
      
      let splitTag = tag.split(",").map(function(item) {
        return item.trim();
      });

      const payload = {
        idUser: idUser ,
        title: title,
        excerpt: excerpt,
        body: body,
        tag: splitTag
      }

      const post = await postService.createPost(payload)
      res.json({ 
        responseCode: 200, 
        status: "success",
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updatePost: async (req, res) => {
    try {
      const { title, excerpt, body, tag } = req.body
      const { idarticle, iduser } = req.params

      const postSearch = await postService.getDetailPost(idarticle, iduser)
      if(postSearch) {
        let splitTag = tag.split(",").map(function(item) {
          return item.trim();
        });
        
        const payload = {
          title: title === '' ? postSearch.title : title,
          excerpt: excerpt === '' ?  postSearch.excerpt : excerpt,
          body: excerpt === '' ?  postSearch.body : body,
          tag: tag === '' ?  postSearch.tag : splitTag,
        }
        const post = await postService.updatePost( idarticle, iduser, payload)
        if(post) {
          res.status(200).json({ 
            responseCode: 200, 
            status: "success",
          });
        } else {
          res.status(404).json({ 
            responseCode: 200, 
            status: "Cannot update data",
          });
        }

      } else {
        res.status(404).json({ 
          responseCode: 404, 
          status: "Data not found",
        });
      }

    

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deletePost: async (req, res) => {
    try {
      const { iduser, idarticle } = req.params

      let searchPost = await postService.getDetailPost(idarticle, iduser)
      if(searchPost) {
        const payload = {
          isDeleted: !searchPost.isDeleted,
          updatedAt: new Date()
        }
        const updateStatus = await postService.softDeletePost(idarticle, iduser, payload)
        if(updateStatus) {
          // console.log(updateStatus)
          const payloadTrash = {
            idUser: updateStatus.idUser,
            idArticle: updateStatus._id,
            title: updateStatus.title,
            excerpt: updateStatus.excerpt,
            isDeleted: true,
            isApprove: updateStatus.isApprove
          }
          const toTrash = trashService.createTrash(payloadTrash)
          res.status(200).json({ 
            responseCode: 200, 
            messages: "success delete",
          });
        } else {
          res.status(500).json({ 
            responseCode: 500, 
            messages: "Delete Failed",
          });
        }
       
      } else {
        res.status(404).json({ 
          responseCode: 404, 
          status: "failed",
          message: 'Article ID not found'
        });
      }
    } catch (error) {
      res.status(500).json({responseCode: 500, error: error.message });
    }
  },
}

module.exports = postController;