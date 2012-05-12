#!/usr/bin/env node

var restwork = require('..'),
     express = require('express');

var app = express.createServer();

app.use(restwork({
  apiPath: "./api",
  mountPoint: "/api"
}));

app.use(express.static("./static"));

app.listen(process.env.PORT || 8080);
