require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
const Cake = require("./models/cake");
const { request, response } = require("express");

const PORT = process.env.PORT || 8081;

const app = express();
app.use(cors());
app.use(bp.json());

//connect to mongodb
mongoose.connect(process.env.DATABASE_URL);

app.get("/cakes", async (request, response) => {
  console.log("Query String: ", request.query);

  // try catch
  try {
    const cakes = await Cake.find(request.query);
    response.status(200).json(cakes);
  } catch (error) {
    console.log(error);
    response.status(404).json(error);
  }
});

// create new cake
app.post("/cakes", async (request, response) => {
  try {
    const newCake = await Cake.create(request.body);
    response.status(200).json(newCake);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});
//delete cake
app.delete("/cakes/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const deletedCake = await Cake.findByIdAndDelete(id);
    response.status(200).send(deletedCake);
  } catch (error) {
    console.log(error);
    response.json(error);
  }
});

//update the cake
app.put("/cakes/:id", async (request, response) => {
  try {
    const updatedCake = await Cake.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    response.status(200).json(updatedCake);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});
app.listen(PORT, () => console.log("Listening to the PORT", PORT));
