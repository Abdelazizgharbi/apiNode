'use strict';

// dependencies
const express = require('express');
const bodyParser = require('body-parser');
// database connection
require('./configs/database');

// create the express app
const app = express();

// configure the body-parser
// to accept urlencoded bodies
// and json data
app.use(bodyParser.urlencoded({ extended: true }))
   .use(bodyParser.json());


 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });
// register all routers
// all routes are prefixed with /api
app.use('/api', require('./routes/fournisseur'));

// set the port
const port = parseInt(process.env.PORT, 10) || 8000;

// start the server
const server = app.listen(port, () => {
  console.log(`App is running at: localhost:${server.address().port}`);
});