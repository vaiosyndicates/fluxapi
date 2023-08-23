const authService = require("../../service/auth")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const AuthController = {
  getUser: async (req, res) => {
    try {
      const users = await authService.getAllBlogs();
      res.json({ data: users, status: "success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createUser: async (req, res) => {
    try {
      const user = await authService.getUserbyName({name: req.body.name})
      if(user) {
        res.json({responseCode: 409, status: 'User already exist'})
      } else {
        const payload = {
          name: req.body.name,
          role: req.body.role == 0 ? 'user' : req.body.role === 1 ? 'approver' : 'admin',
          password: await bcrypt.hash(req.body.password, 10)
        }
        const newUser = await authService.createUsers(payload)
        res.json({
          responseCode: 200, 
          status: 'Success',
          data: newUser
        })
      }
    } catch (error) {
      res.json({
        responseCode: 505, 
        message: 'Network Error',
        data: error.message
      })
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await authService.getUserbyName({name: req.body.name})
      if(user) {
        const checkpw = await bcrypt.compare(req.body.password, user.password)
        if(checkpw) {
          const token = jwt.sign({name: user.name, role: user.role}, process.env.SECRET_JWT)
          res.json({
            responseCode: 200,
            message: 'Login success',
            data: token,
          })
        } else {
          res.json({
            responseCode: 404, 
            status: 'Password not match',
          })
        }
      } else {
        res.json({
          responseCode: 404, 
          status: 'User not found',
        })
      }
    } catch (error) {
      res.json({
        responseCode: 505, 
        message: 'Network Error',
        data: error.message
      })
    }
  }
}

module.exports = AuthController;