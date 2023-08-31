const trashModel = require('../../models/Trash')
const { ObjectId } = require('mongodb');

exports.getAllTrash = async (id) => {
  return await trashModel.find({isDeleted: true}).exec();
};

exports.getTrashbyID = async (id) => {
  return await trashModel.findOne({"_id": new ObjectId(id)});
};

exports.createTrash = async (post) => {
  return await trashModel.create(post);
};
exports.deleteTrashbyId = async (id) => {
  return await trashModel.findByIdAndDelete({"_id": new ObjectId(id)});
};
