"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

// mongoose.connect('mongodb://localhost:27017/cats2');
mongoose.connect("mongodb://127.0.0.1:27017/cats2");

const catSchema = new mongoose.Schema({
  ownerName: String,
  catName: String,
  catBreed: String,
});
const catModel = mongoose.model("kitten", catSchema);

function seedData() {
  const sherry = new catModel({
    ownerName: "razan",
    catName: "sherry",
    catBreed: "angora",
  });
  const fluffy = new catModel({
    ownerName: "razan",
    catName: "fluffy",
    catBreed: "british short hair",
  });
  const doddore = new catModel({
    ownerName: "luca",
    catName: "doddore",
    catBreed: "mix",
  });
  sherry.save();
  fluffy.save();
  doddore.save();
}

// seedData();

// Routes
app.get("/", homeHandler);
app.get("/cat", getCatsHandler);
app.post("/cat", addCatHandler);
app.delete("/cat/:id", deleteCatHandler);
app.put("/cat/:id", updateCatHandler);

// Routes Handlers
// localhost:3001/
function homeHandler(req, res) {
  res.status(200).send("ALIVE!!!");
}

// localhost:3001/cat >> GET
// localhost:3001/cat?owner=razan
async function getCatsHandler(req, res) {
  let allCats = await catModel.find({}); //array: get all cats
  res.send(allCats);
  
  // let ownerName2 = req.query.owner;
  // let allCats = await catModel.find({ ownerName: ownerName2 }); //array: get all cats based on ownerName
  // if (allCats.length) {
  //   res.send(allCats);
  // } else {
  //   //send a request to an api
  //   // get array
  //   // send a res for this array
  //   res.send(`no cats for `);
  // }

  
}


// localhost:3001/cat >> POST (body:{"ownerName":"daniel",catName:"mishmish","catBreed":"scottish"})
async function addCatHandler(req, res) {
  console.log(req.body);
  //   const ownerName = req.body.ownerName2;
  //   const catName = req.body.catName2;
  //   const catBreed = req.body.catBreed2;
  const { ownerName, catName, catBreed } = req.body;
  let newCat = await catModel.create({ ownerName, catName, catBreed });
  res.send(newCat);

  // let allCats = await catModel.find({});
  // res.send(allCats);
}


// localhost:3001/cat/639d96896eb9ba402576c5f1 >> DELETE
// localhost:3001/cat?id=639d96896eb9ba402576c5f1 >> DELETE
async function deleteCatHandler(req, res) {
  console.log(req.params);
  let id = req.params.id;

  // method-1
  // let deleteCat = await catModel.findByIdAndDelete(id);
  // console.log(deleteCat);
  // res.send("data has been deleted successfully!!");

  // method-2
  // let deleteCat = await catModel.deleteOne({_id:id});
  // console.log(deleteCat);
  // res.send("data has been deleted successfully!!");

  // method-3
   catModel.findByIdAndDelete(id, function (error, deleteCat) {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log(deleteCat);
      res.send("data has been deleted successfully!!");
    }
  });

  // let allCats = await catModel.find({});
  // res.send(allCats);
}

// localhost:3001/cat/639d96896eb9ba402576c5f1 >> PUT
async function updateCatHandler(req, res) {
  console.log(req.params);
  console.log(req.body);
  const { ownerName, catName } = req.body;
  const { id } = req.params;
  const updatedCat = await catModel.findByIdAndUpdate(id, {
    ownerName,
    catName,
  });
  console.log(updatedCat);
  res.send("cat has been updated successfully");
  // let allCats = await catModel.find({});
  // res.send(allCats);
}

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
