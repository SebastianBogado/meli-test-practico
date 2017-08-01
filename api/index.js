const express = require('express');
const app = express();


app.use('/', require('./author.middleware'));
app.use('/items', require('./items'));


module.exports = app;
