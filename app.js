const express = require('express');
const app = express();

app.use(express.json());

app.use('/', require('./src/Routes/Routes'));

module.exports = app;
