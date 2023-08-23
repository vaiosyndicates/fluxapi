const adminService = require("../../service/transaction")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const { ObjectId } = require('mongodb');

const AdminController = {
  getTrx: async (req, res) => {
    try {
      const trx = await adminService.getAllTrx();
      res.json({ data: trx, status: "success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createTrx: async (req, res) => {
    try {
      const { trxName, trxDetail, sender, recipient, amount } = req.body
      const payload = {
        transactionName: trxName ,
        transactionDetail: trxDetail,
        sender: sender,
        recipient: recipient,
        amount: parseInt(amount)
      }

      const trx = await adminService.createTrx(payload)
      res.json({ 
        responseCode: 200, 
        status: "success create from admin",
        data: trx
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateStatusTrx: async (req, res) => {
    try {
      const { id } = req.params
      const { status } = req.body

      let searchTrx = await adminService.getTrxbyId({ "_id": new ObjectId(id) })
      if(searchTrx) {
        const payload = {
          status: status,
          updatedAt: new Date()
        }
  
        const updateStatus = adminService.updateTrx(id, payload )
        res.json({ 
          responseCode: 200, 
          status: "success",
          data: updateStatus
        });
      } else {
        res.json({ 
          responseCode: 404, 
          status: "failed",
          message: 'Trx ID not found'
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteTrx: async (req, res) => {
    try {
      const { id } = req.params
      const { status } = req.body

      let searchTrx = await adminService.getTrxbyId({ "_id": new ObjectId(id) })
      if(searchTrx) {
        const payload = {
          isDeleted: !searchTrx.isDeleted,
          updatedAt: new Date()
        }
  
        const updateStatus = adminService.updateTrx(id, payload )
        res.json({ 
          responseCode: 200, 
          status: "success delete from admin",
          data: updateStatus
        });
      } else {
        res.json({ 
          responseCode: 404, 
          status: "failed",
          message: 'Trx ID not found'
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
}

module.exports = AdminController;