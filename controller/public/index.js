const postService = require("../../service/post")
const trashService = require("../../service/trash")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { parseISO } = require("../../utill")

const publicController = {
  getPostPublic: async (req, res) => {
    try {
      const post = await postService.getAllPostPublic();
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
    const { tag } = req.body
    let arr = []

    try {
      let splitTag = tag.split(",").map(function(item) {
        let clean = item.trim();
        return arr.push(clean)
      });

      const trx = await postService.getPostbyTagPublic(arr);
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
    const { idarticle } = req.params

    try {

      const trx = await postService.getDetailPost(idarticle);
      res.status(200).json({
         responseCode: 200,
         status: "success",
         data: trx 
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getPostbyDaterange: async (req, res) => {
    const { start, end } = req.params

    let startDate = parseISO(start)
    let endDate = parseISO(end)

    try {

      const trx = await postService.getPostbyDateRange(startDate, endDate);
      res.status(200).json({
         responseCode: 200,
         status: "success",
         data: trx 
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
}

module.exports = publicController;