"use strict";

const express = require("express");
const superagent = require("superagent"); // npm i superagent
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

// localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("Im alive horraay");
});

// localhost:3000/getPoke
app.get("/getPoke", (req, res) => {
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
});

// localhost:3000/getPokebyname?name=charizard
app.get("/getPokebyname", (req, res) => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
  console.log(req.query);
  let pokeName = req.query.name;//charizard
  superagent
    .get(url)
    .then((pokeData) => {
        const poke = pokeData.body.results.find((pokemon)=> pokemon.name.toLowerCase() === pokeName.toLowerCase());
        res.status(200).send(poke);
    })
    .catch((error) => {
      res.status(500).send(`something went wrong ${error}`);
    });
});

// localhost:3000/sss
// localhost:3000/aa
app.get("*", (req, res) => {
  res.status(404).send("not found");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
