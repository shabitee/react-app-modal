"use strict";
// DRY code

const express = require("express");
require("dotenv").config();
const cors = require('cors');//npm i cors

const notfoundhandler = require('./modules/notFound');
const pokemon = require('./modules/pokemon');
const weatherhandler = require('./modules/weather');
console.log(pokemon);

const app = express();
const PORT = process.env.PORT;
app.use(cors()); // everyone

// endpoints
app.get("/", homehandler);
app.get("/getPoke",pokemon.getpokehandler);
app.get("/getPokebyname", pokemon.getpokebynamehandler); // name
app.get('/weather',weatherhandler); // cityname
app.get("*", notfoundhandler);

// endpoint handlers
function homehandler(req, res) {
  res.status(200).send("Im alive horraay");
}

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
