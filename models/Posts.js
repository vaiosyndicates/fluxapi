const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const postSchema = new Schema({
  idUser: String,
  title: String,
  excerpt: String,
  body: String,
  tag: [String],
  isDeleted: {
    type: Boolean,
    default: false
  },
  isApprove: {
    type: Boolean,
    default: false
  }
},
{
  timestamps: true
});
 
module.exports = mongoose.model("Post", postSchema);