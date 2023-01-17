"use strict";

const axios = require("axios");
const digimonModel = require("../models/digimon");

async function getDigimonsAPIHandler(req, res) {
  let allDigimons = await axios.get(
    "https://digimon-api.vercel.app/api/digimon"
  );
  res.send(allDigimons.data);
}

async function getDigimonsHandler(req, res) {
  let allDigimons = await digimonModel.find({});
  res.send(allDigimons);
}

async function addDigimonHandler(req, res) {
  // body
  const { name, img, level } = req.body;
  let newDigimon = await digimonModel.create({
    digimonName: name,
    digimonLevel: level,
    digimonImg: img,
  });
  res.send(newDigimon);
}

async function deleteDigimonHandler(req, res) {
  const id = req.params.id;
  let deletedDigimon = await digimonModel.findByIdAndDelete(id);
  console.log(deletedDigimon);
  res.send(`${deletedDigimon.digimonName} has been deleted`);
}

async function updateDigimonHandler(req, res) {
  const id = req.params.id;
  const { digimonName, digimonLevel, digimonImg } = req.body;
  console.log('inside update',req.body);
  let updatedDigimon = await digimonModel.findByIdAndUpdate(id, {
    digimonName,
    digimonLevel,
    digimonImg,
  });
  res.send('data has been updated');
}

module.exports = {
  getDigimonsAPIHandler,
  getDigimonsHandler,
  addDigimonHandler,
  deleteDigimonHandler,
  updateDigimonHandler
};
