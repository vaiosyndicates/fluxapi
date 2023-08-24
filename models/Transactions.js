const mongoose = require("mongoose");
const moment = require('moment');
const Schema = mongoose.Schema;
 
const transactionSchema = new Schema({
  transactionName: String,
  transactionDetail: String,
  sender: String,
  recipient: String,
  amount: Number,
  status: {
    type: String,
    default: 'pending'
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
},
{
  timestamps: true
});
 
module.exports = mongoose.model("Transaction", transactionSchema);