'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const RANDOM_ID = getRandomInt(1000);

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world from node instance ' + RANDOM_ID + "\n");
});

app.listen(PORT, HOST);
console.log('Running on http://'+HOST+":"+PORT);
