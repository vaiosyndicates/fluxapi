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
  return await TransactionModel.find({$and:[status, {isDeleted: false}]}).exec();
};

exports.getTrxbyRange = async (start, end) => {
  return await TransactionModel.find({
    createdAt: {
      $gte: new Date(start),
      $lte: new Date(end)
    }
  }).exec();
};

exports.getTrxbyRangeStatus = async (start, end, status) => {
  return await TransactionModel.find({
    $and:[
      {
        createdAt: {
        $gte: new Date(start),
        $lte: new Date(end)
      }},
      {status: status}
    ]    
  }).exec();
};

exports.updateTrx = async (id, trx) => {
  return await TransactionModel.findByIdAndUpdate(id, trx);
};

exports.deleteTrx = async (id) => {
  return await TransactionModel.findByIdAndDelete(id);
};