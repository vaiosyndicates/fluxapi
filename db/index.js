const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('db connect')
  } catch (error) {
    console.log(error.message)
  }
}


// mongoose.connect("mongodb://mongo:iSKA6jsDuVePEXhAlnUX@containers-us-west-92.railway.app:7898/test",{
//   useUnifiedTopology: true, // For Mongoose 5 only. Remove for Mongoose 6+
//   serverSelectionTimeoutMS: 1000, // Defaults to 30000 (30 seconds)
// }).then((dbo)=>{
//   console.log("DB connected")
// },(err)=>{
//   console.log(err)
// });



const db = connectDB

module.exports = connectDB