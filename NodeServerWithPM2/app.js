"use strict";
exports.__esModule = true;
var http = require("http");
http.createServer(function (request, response) {
    response.end("Hello World");
})
    .listen(3000, function () { return console.log("Server Started."); });
