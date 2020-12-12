const express = require('express');
const routes = require('./routes');

const app = express();

// api routes
app.use(routes);

module.exports = app;