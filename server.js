'use strict';
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const findParking = require('./findParking.js');

// Constants
const PORT = 8080;

// App
const app = express();
app.set('view engine', 'pug')
var server = http.createServer(app);

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render("destination_entry");
});

app.post('/find_parking', (req, res) => {
    console.log(req.body.destination_field);
    findParking.findParking("hi", function(results){
      console.log(results);
      res.render("result", {result: results[0].destination});
    })
    
});

server.listen(PORT);

console.log('Running');