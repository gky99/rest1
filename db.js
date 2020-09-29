const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dbHw1");

const User = require("./User");

async function find() {
  const res = [];
  try {
    const instances = await User.find();
    for (instance of instances) {
      res.push(instance.toObject());
    }
  } catch(err) {
    console.error(err);
  }
  return res;
}

async function findOne(id) {
  try {
    let instance = await User.findOne({ id: id });
    // console.log(instance);
    return instance.toObject();
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function deleteOne(id) {
  try {
    return await User.deleteOne({ id: id });
  } catch (error) {
    console.error(error);
    return -1;
  }
}

async function insert(user) {
  try {
    // user._id = mongoose.Types.ObjectId();
    let res = new User(user);
    res = await res.save();
    return res.toObject();
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function update(id, user) {
  try {
    let obj = await User.findOne({id: id});
    for(let property of Object.getOwnPropertyNames(user)) {
      if (user[property]) {
        obj[property] = user[property];
      }
    }
    let res = await obj.save();
    return res.toObject();
  } catch(err) {
    console.error(err);
    return null;
  }
}

function disconnect() {
  mongoose.disconnect();
}

module.exports.deleteOne = deleteOne;
module.exports.find = find;
module.exports.findOne = findOne;
module.exports.disconnect = disconnect;
module.exports.insert = insert;
module.exports.update = update;