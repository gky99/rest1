const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  id: Number,
  name: String,
  age: Number,
  sex: String,
  title: String,
  startDate: Number,
});

UserSchema.method("toObject", function () {
  // console.log('stringify');
  return {
    id: this.id,
    name: this.name,
    age: this.age,
    sex: this.sex,
    title: this.title,
    startDate: this.startDate,
  };
});

module.exports = mongoose.model("Users", UserSchema);
