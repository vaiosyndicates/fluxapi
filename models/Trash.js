const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const trashSchema = new Schema({
  idUser: String,
  idArticle: String,
  title: String,
  excerpt: String,
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
 
module.exports = mongoose.model("Trash", trashSchema);