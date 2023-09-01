const aprvService = require("../../service/auth")
const postService = require("../../service/post")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { ObjectId } = require('mongodb');

const ApprovalController = {
  getUsers: async (req, res) => {
    try {
      const trx = await aprvService.getAllUsers();
      res.status(200).json({
         responseCode: 200,
         status: "success",
         data: trx 
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getPostbyID: async (req, res) => {
    const { id } = req.params
    try {
      const trx = await postService.getAllPostByID(id);
      res.status(200).json({
         responseCode: 200,
         status: "success",
         data: trx 
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getPostbyTag: async (req, res) => {
    const { id } = req.params
    const { tag } = req.body
    let params = []

    try {
      let splitTag = tag.split(",").map(function(item) {
        let clean = item.trim();
        return params.push(clean)
      });

      const trx = await postService.getPostbyTag(id, params);
      res.status(200).json({
         responseCode: 200,
         status: "success",
         data: trx 
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },  
  getDetailPost: async (req, res) => {
    const { idarticle, iduser } = req.params
    console.log(`article ${idarticle} user ${iduser}`)
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
  updateStatusPost: async (req, res) => {
    try {
      const { idarticle, iduser } = req.params

      let searchTrx = await postService.getDetailPost(idarticle , iduser)
      if(searchTrx) {
        let status = searchTrx.isApprove
        const payload = {
          isApprove: !status,
          updatedAt: new Date()
        }
  
        const updateStatus = postService.updateStatusPost(idarticle, payload )
        res.status(200).json({ 
          responseCode: 200, 
          status: "success update data",
        });

      } else {
        res.status(404).json({ 
          responseCode: 404, 
          status: "failed",
          message: 'Article not found'
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
}

module.exports = ApprovalController;