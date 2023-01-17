'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

const errorHandler = require('./handlers/500');
const notFoundHandler = require('./handlers/404');
const digimonRoutes = require('./routes/digimon')

// Middlewares
app.use(cors());
app.use(express.json());

app.use(digimonRoutes);

app.use(errorHandler);
app.use('*',notFoundHandler);

app.listen(PORT,()=>console.log(`Listening on port ${PORT}`));