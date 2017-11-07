var http = require("http");
var PORT = 7000;

function handleNiceRequest(request, response) {
	var niceArray = ["You are a fantastic human being", "You are more fun than anyone or anything I know, including bubble wrap.", "You are the most perfect you there is.", "You are enough.", "You are one of the strongest people I know.", "You look great today.", "You have the best smile.", "Your outlook on life is amazing.", "You just light up the room.", "You make a bigger impact than you realize.", "You are always so helpful.", "You have the best laugh.", "I appreciate our friendship.", "Your inside is even more beautiful than your outside.", "You just glow.", "I love the way you bring out the best in people.", "You bring out the best in the rest of us.", "You inspire me.", "Nothing can stop you.", "You just made my day.", "You make me float up like I’m on millions of bubbles", "You are an excellent friend.", "When it comes to cooking, no one’s meals are quite as delicious.", "I am a better person because of you.", "I like the way you are."];
	
	randomNiceQuote = niceArray[Math.floor(Math.random() * niceArray.length)];
	response.end(randomNiceQuote);
}

var server = http.createServer(handleNiceRequest);

server.listen(PORT, function() {
	console.log("Server lisetening on: http://localhost:" + PORT);
});



var http = require("http");
var PORTTWO = 7050;

function handleMeanRequest(request, response) {
	var meanArray = ["Any similarity between you and a human is purely coincidental!", "Anyone who told you to be yourself couldn't have given you worse advice.", "Are your parents siblings?", "As an outsider, what do you think of the human race?", "Calling you stupid would be an insult to stupid people.", "Did your parents ever ask you to run away from home?", "Do you ever wonder what life would be like if you'd had enough oxygen at birth?", "Don't you have a terribly empty feeling - in your skull?", "Do you still love nature, despite what it did to you?", "Don't you need a license to be that ugly?", "Go ahead, tell them everything you know. It'll only take 10 seconds.", "Have you considered suing your brains for non-support?", "How did you get here? Did someone leave your cage open?", "I'd like to see things from your point of view but I can't seem to get my head that far up my ass.", "I bet your brain feels as good as new, seeing that you've never used it.", "I heard you got a brain transplant and the brain rejected you!", "If your brain was chocolate it wouldn't fill an M&M.", "Some day you will find yourself - and wish you hadn't."]
	var randomQuote = meanArray[Math.floor(Math.random() * meanArray.length)];

	//response.end("It works!! Path Hit: " + request.url);
	response.end(randomQuote);
}

var server = http.createServer(handleMeanRequest);

server.listen(PORTTWO, function() {
	console.log("Server lisetening on: http://localhost:" + PORTTWO);
});