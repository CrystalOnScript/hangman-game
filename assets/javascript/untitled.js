
//possible words
var words = ["charmander", "squirtle" , "bulbasaur", "caterpie", "weedle", "rattata"];

//the computer selects a word from words
var computerWord = words[Math.floor(Math.random() * words.length)];

// start scores
var wins = 0;
var losses = 0;
var lives = 10;
var userGuessArray = [];
var compWordArray = [];

//show word to check for correctness
console.log(computerWord);

//update page function
function pageUpdate(){
	document.getElementById("game").innerHtml =
	"<p>Wins: " + wins + "</p>" + 
	"<p>Losses: " + losses + "</p>" + 
    "<p>Guesses: " + lives + "</p>" + 
    "<p>Letters Guessed: " + userGuessArray + "</p>" +

    //.join() changes the array into a string
    "<p>Answer: " + compWordArray.join(" ") + "</p>" 

};

//pushes underscores to hiddenWordArray function
function makeUnderscore() {
    for (var i = 0; i < computerWord.length; i++) {
        compWordArray.push("_");
    }

}

//call underscores function
makeUnderscore();

//call update text because function makeUnderscore which affects hiddenWordArray is after the most recent update
pageUpdate();

function randomWord () {
    computerWord = words[Math.floor(Math.random()*words.length)]
}


function gameReset (){
	lives = 10;
	randomWord();
	var userGuessArray = [];
	var compWordArray = [];
	makeUnderscore();
	console.log(computerWord);
}

document.onkeyup = function(){
// changes user guess to lower case, establish guess
	var userGuess = event.key.toLoswerCase();

	//forLoop
	for (var i = 0; i < computerWord.length; i++){
		// if userGuess is equal to the i th char of word
		if(userGuess === computerWord.charAt(i)){
			// add user guess to correct dash spot
			compWordArray[i] = userGuess;
		}
	}
	// if userGuess is not included in word
	if (!computerWord.includes(userGuess)){
		userGuessArray.push(userGuess);
		lives--;
	}

	if (lives < 1){
		gameReset();
	}

	if (compWordArray.join("") === currentWord){
		wins++;
		gameReset();
	}

	pageUpdate();

}





















