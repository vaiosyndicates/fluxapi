const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


mongoose.connect(process.env.MONGO_URL).then((dbo)=>{
  console.log("DB connected")
},(err)=>{
  console.log("error")
});

const db = mongoose.connection

module.exports = db