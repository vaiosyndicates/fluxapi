const UserModel = require("../../models/Users");
const { ObjectId } = require('mongodb');

exports.getAllUsers = async () => {
  return await UserModel.find({role: 'maker'}).select('_id name role createdAt isApprove').exec();
};


exports.createUsers = async (user) => {
  return await UserModel.create(user);
};

exports.getUserbyName = async (name) => {
  return await UserModel.findOne(name);
};

exports.getUserbyId = async (ids) => {
  return await UserModel.findOne(ids);
};

exports.updateIdUser = async (id, trx) => {
  return await UserModel.findByIdAndUpdate(id, trx);
};

exports.getUserbyEmail = async (params) => {
  return await UserModel.findOne({email: params});
};

exports.changePassword = async (id, data) => {
  return await UserModel.findByIdAndUpdate(id, { password: data});
};

// ADMIN

exports.getAllUsersAdmin = async () => {
  return await UserModel.find().select('_id name role createdAt isApprove').exec();
};

exports.activeUserManagement = async (id, trx) => {
  return await UserModel.findByIdAndUpdate(id, trx);
};

exports.deleteUserbyId = async (id) => {
  return await UserModel.findByIdAndDelete({"_id": new ObjectId(id)});
};
