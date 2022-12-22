"use strict";

const superagent = require("superagent"); // npm i superagent


function getpokehandler(req, res) {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
  superagent
    .get(url)
    .then((pokeData) => {
      // console.log(pokeData.body);
      // pokeData.body.results
      // const pokeArr = pokeData.body.results.map((pokemon)=> {
      //     return pokemon.name
      // });
      const pokeArr = pokeData.body.results.map((pokemon) => pokemon.name);
      res.status(200).send(pokeArr);
    })
    .catch((error) => {
      res.status(500).send(`something went wrong ${error}`);
    });
}

function getpokebynamehandler(req, res) {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
  console.log(req.query);
  let pokeName = req.query.name; //charizard
  superagent
    .get(url)
    .then((pokeData) => {
      const poke = pokeData.body.results.find(
        (pokemon) => pokemon.name.toLowerCase() === pokeName.toLowerCase()
      );
      res.status(200).send(poke);
    })
    .catch((error) => {
      res.status(500).send(`something went wrong ${error}`);
    });
}


module.exports = {getpokehandler,getpokebynamehandler};