#!/usr/bin/env node
var fs = require('fs');
var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

var buf=fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(buf.toString());
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
