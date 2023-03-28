const mongoose = require("mongoose");
require("dotenv").config();

const Cake = require("./models/cake");

mongoose.connect(process.env.DATABASE_URL);
async function seed() {
  await Cake.create({
    cakename: "Strawberry Cake",
    size: 2,
    price: 20,
  });
  mongoose.disconnect();
}
seed();
