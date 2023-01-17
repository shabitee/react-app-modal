"use strict";

const express = require ("express");
require ("dotenv").config();
const cors = require("cors");



const PORT = process.env.PORT;
const app = express();
app.use(cors());


app.get("/", (req, res) => {
    res.status(200).send('all good');
})


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
 