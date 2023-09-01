const userManagement = require("../../service/auth")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { ObjectId } = require('mongodb');
const { parseISO }  = require('../../utill')

const AdminController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userManagement.getAllUsersAdmin();
      res.status(200).json({ 
        responseCode: 200,
        message: "Success",
        data: users
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
 
  updateStatusUser: async (req, res) => {
    try {
      const { id } = req.params

      let searchUser = await userManagement.getUserbyId({ "_id": new ObjectId(id) })
      if(searchUser) {
        const payload = {
          isApprove: !searchUser.isApprove,
          updatedAt: new Date()
        }
  
        const updateStatus = userManagement.activeUserManagement(id, payload )
        res.status(200).json({ 
          responseCode: 200, 
          status: "success update data"
        });
      } else {
        res.status(404).json({ 
          responseCode: 404, 
          status: "failed",
          message: 'User ID not found'
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteUsers: async (req, res) => {
    try {
      const { id } = req.params

      let searchUser = await userManagement.getUserbyId({ "_id": new ObjectId(id) })
      if(searchUser) {
        const delUser = await userManagement.deleteUserbyId(id)
        if(delUser) {
          res.status(200).json({ 
            responseCode: 200, 
            status: "Success",
            message: 'Success delete user'
          });
        } else {
          res.status(400).json({ 
            responseCode: 404, 
            status: "failed",
            message: 'Failed delete'
          });
        }
       
      } else {
        res.status(404).json({ 
          responseCode: 404, 
          status: "failed",
          message: 'User ID not found'
        });
      }
    } catch (error) {
      res.status(500).json({responseCode: 500, error: error.message });
    }
  },
  createAdmin: async (req, res) => {
    try {
      const { name, email, password, role } = req.body
      const user = await userManagement.getUserbyName({name: name})
      if(user) {
        res.status(409).json({responseCode: 409, status: 'User already exist'})
      } else {
        const payload = {
          name: name,
          email: email,
          role: role,
          password: await bcrypt.hash(password, 10),
          isApprove: true,
          isDeleted: false,
        }
        const newUser = await userManagement.createUsers(payload)
        res.json({
          responseCode: 200, 
          status: 'Success',
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

module.exports = AdminController;