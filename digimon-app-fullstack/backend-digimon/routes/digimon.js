'use strict';


const express = require('express');
const digimonRouter = express.Router();
const digimonHandlers = require('../controllers/digimon');
// console.log(digimonHandlers);

// GET: localhost:3001/digimonapi
digimonRouter.get('/digimonapi',digimonHandlers.getDigimonsAPIHandler);

// GET: localhost:3001/digimon
digimonRouter.get('/digimon',digimonHandlers.getDigimonsHandler);

// POST: localhost:3001/digimon (body:{
// "name": "Tsunomon",
// "img": "https://digimon.shadowsmith.com/img/tsunomon.jpg",
// "level": "In Training"
// })
digimonRouter.post('/digimon',digimonHandlers.addDigimonHandler);


// DELETE: localhost:3001/digimon/63b960ca0fd495bc38e1975d
digimonRouter.delete('/digimon/:id',digimonHandlers.deleteDigimonHandler);

// UPDATE: localhost:3001/digimon/63b960ca0fd495bc38e1975d
// (body:{
// "name": "Tentomon2",
// "img": "https://digimon.shadowsmith.com/img/tsunomon.jpg",
// "level": "In Training"
// })
digimonRouter.put('/digimon/:id',digimonHandlers.updateDigimonHandler);

module.exports = digimonRouter;