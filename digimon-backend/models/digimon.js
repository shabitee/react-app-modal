"use strict";

const mongoose = require("./index");

const digimonSchema = new mongoose.Schema({
  digimonName: String,
  digimonLevel: String,
  digimonImg: String,
});

const digimonModel = mongoose.model("digimon", digimonSchema);

function seedData() {
  const newDigimon = new digimonModel({
    digimonName: "Tentomon",
    digimonLevel: "Rookie",
    digimonImg: "https://digimon.shadowsmith.com/img/tentomon.jpg",
  });
  newDigimon.save();
}
// seedData();

module.exports = digimonModel;
