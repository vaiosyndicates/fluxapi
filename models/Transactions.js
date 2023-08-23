const mongoose = require("mongoose");
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
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
 
module.exports = mongoose.model("Transaction", transactionSchema);