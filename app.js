const express = require('express')
const authRouter = require('./routes/AuthRoutes')
const trxRouter = require('./routes/TransferRoutes')
const approvalRouter = require('./routes/ApprovalRoutes')
const adminRouter = require('./routes/AdminRoutes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connect = require('./db')
const bodyParser = require('body-parser')
dotenv.config()

const app = express()


connect.db

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

app.use("/api/auth", authRouter);
app.use("/api/transaction", trxRouter);
app.use("/api/approval/transaction", approvalRouter);
app.use("/api/admin/transaction", adminRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;