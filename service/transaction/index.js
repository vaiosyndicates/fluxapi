const TransactionModel = require("../../models/Transactions");

exports.getAllTrx = async () => {
  return await TransactionModel.find({isDeleted: false}).exec();
};

exports.createTrx = async (trx) => {
  return await TransactionModel.create(trx);
};

exports.getTrxbyId = async (ids) => {
  return await TransactionModel.findOne(ids);
};

exports.getTrxbyStatus = async (status) => {
  return await TransactionModel.find(status).exec();
};

exports.updateTrx = async (id, trx) => {
  return await TransactionModel.findByIdAndUpdate(id, trx);
};

exports.deleteTrx = async (id) => {
  return await TransactionModel.findByIdAndDelete(id);
};