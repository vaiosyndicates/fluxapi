const postModel = require('../../models/Posts')
const { ObjectId } = require('mongodb');

exports.getAllPostByID = async (id) => {
  return await postModel.find({$and:[{"idUser": id}, {isDeleted: false}]}).exec();
};

exports.getAllPostPublic = async (id) => {
  return await postModel.find({$and:[{isDeleted: false}, {isApprove: true}]}).select('_id title excerpt').exec();
};

exports.createPost = async (post) => {
  return await postModel.create(post);
};

exports.getDetailPost = async (idarticle, iduser) => {
  if(idarticle && iduser) {
    return await postModel.findOne({$and:[{ "_id": new ObjectId(idarticle)}, {isDeleted: false}, {idUser: iduser}]});
  } else {
    return await postModel.findOne({$and:[{ "_id": new ObjectId(idarticle)}, {isDeleted: false}, {isApprove: true}]});
  }

};

exports.getDetailPostRestore = async (idarticle, iduser) => {
  return await postModel.findOne({$and:[{ "_id": new ObjectId(idarticle)}, {idUser: iduser}]});
};

exports.getPostbyTag = async (id, params) => {
  return await postModel.find({
    $and:[
      {idUser: id},
      {isDeleted: false},
      {tag: {$all: params}}
    ]
  }).exec();
};

exports.getPostbyTagPublic = async (params) => {
  return await postModel.find({
    $and:[
      {isApprove: true},
      {isDeleted: false},
      {tag: {$all: params}}
    ]
  }).exec();
};

exports.updatePost = async (id, ids, data) => {
  return await postModel.findOneAndUpdate({"_id" : id, "idUser" : ids }, {
    "$set": {
      "title": data.title,
      "excerpt" : data.excerpt,
      "body" : data.body,
      "tag" : data.tag
    }
  }).exec();
};

exports.softDeletePost = async (id, ids, data) => {
  return await postModel.findByIdAndUpdate({"_id" : id, "idUser" : ids }, data);
};

exports.updateStatusPost = async (id, data) => {
  return await postModel.findByIdAndUpdate(id, data);
};

exports.getPostbyDateRange = async (start, end) => {
  return await postModel.find({
    $and:[
      {isApprove: true},
      {isDeleted: false},
      {
        createdAt: {
        $gte: new Date(start),
        $lte: new Date(end)
      }}
    ]
  }).select('_id title excerpt').exec();
};
