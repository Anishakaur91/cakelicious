const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cakeSchema = new Schema({
  cakename: String,
  size: Number,
  price: Number,
  image: String,
});

const Cake = mongoose.model("Cake", cakeSchema);

module.exports = Cake;
