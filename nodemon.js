var http = require("http");
var PORT = 7000;

function handleNiceRequest(request, response) {
	response.end("You are a fantastic human being");
}

var server = http.createServer(handleNiceRequest);

server.listen(PORT, function() {
	console.log("Server lisetening on: http://localhost:" + PORT);
});



var http = require("http");
var PORTTWO = 7050;

function handleMeanRequest(request, response) {
	//response.end("It works!! Path Hit: " + request.url);
	response.end("U ugly");
}

var server = http.createServer(handleMeanRequest);

server.listen(PORTTWO, function() {
	console.log("Server lisetening on: http://localhost:" + PORTTWO);
});