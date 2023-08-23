const trxService = require("../../service/transaction")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const TrxController = {
  getTrx: async (req, res) => {
    try {
      const trx = await trxService.getAllTrx();
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

      const trx = await trxService.createTrx(payload)
      res.json({ 
        responseCode: 200, 
        status: "success",
        data: trx
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
}

module.exports = TrxController;