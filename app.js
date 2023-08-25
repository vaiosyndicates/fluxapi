const express = require('express')
const authRouter = require('./routes/AuthRoutes')
const trxRouter = require('./routes/TransferRoutes')
const approvalRouter = require('./routes/ApprovalRoutes')
const adminRouter = require('./routes/AdminRoutes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connect = require('./db')
const bodyParser = require('body-parser')
const swaggerJsdoc = require("swagger-jsdoc"),
      swaggerUi = require("swagger-ui-express");
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

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "REST Api Documentation",
      version: "0.1.0",
      description:
        "Simple API Documentation for Transfer transaction",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Conan Edogawa",
        url: "https://github.com/vaiosyndicates",
        email: "kresnafti2013@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3001/api",
      },
    ],
  },
  apis: ["./doc/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;