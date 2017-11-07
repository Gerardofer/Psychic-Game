// ********** GAME ***************
	// 4.- if statements that will check if the computer character's was guessed or missed.

var letterPool = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessLeft = 12;
var lettersGuessed = "";

document.onkeyup = function(){
	var computerGuess = letterPool[Math.floor(Math.random() * letterPool.length)];

	var userInput = String.fromCharCode(event.keyCode).toLowerCase();

	if (userInput){
		guessLeft --;
		lettersGuessed += userInput;
		if (computerGuess === userInput){
			wins ++;
		}
		if (computerGuess !== userInput){
			losses++;
		}
	}

	gameReset();

	var html = "<p>Guess what letter I'm thinking of</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses left: " + guessLeft + "</p>" + "<p>Your Guesses so far: " + lettersGuessed + "</p>";

	document.querySelector("#dashboard").innerHTML = html;

};


function gameReset(){
	if (guessLeft === 0){
		wins = 0;
		losses = 0;
		guessLeft = 12;
		lettersGuessed = "";
	}
}


