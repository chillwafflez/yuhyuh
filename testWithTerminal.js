let wordBank = ["DEKU", "EREN", "GOOK", "GOJO"];
let chosenWord = wordBank[retrieveWord()];
var charsOfGiven = [];
var charsOfGuess = [];
var display = [];
let numofTries = chosenWord.length;
let testOutput = "";
let guess;


//gets a random word from wordbank
function retrieveWord() {
    return Math.floor(Math.random() * wordBank.length);
}

//PREPPING CHOSEN WORD
//puts all the characters from the chosen word into an array
for (let i = 0; i < chosenWord.length; i++) {
    charsOfGiven[i] = chosenWord.charAt(i);
}



while (numofTries <= chosenWord.length) {

    guess = prompt("Enter your guess");
    for (let i = 0; i < guess.length; i++) {
        charsOfGiven[i] = guess.charAt(i);
        
    }
    numofTries++;
}

if (guess.length > chosenWord.length || guess.length < chosenWord.length) {
    console.log("too long or too short breh");
} else if (0 == guess.localeCompare(chosenWord)) {
    console.log("noicu");
} else {
    console.log("u suck");
}

function compare(chosen, guess) {
    for (let i = 0; i < chosen.length; i++) {
        if (chosen[i] == guess[i]) {
            display[i] = chosen[i] + "y";
        } else if (contains(chosen[i], guess)) {
            display[i] = chosen[i] + "i";
        }
    }
}  

function contains(char, chosen) {
    let contains;
    for (let i = 0; i <= chosen; i++) {
        if (char == chosen[i]) {
            contains = true;
        } else { 
            contains = false;
        }
    }
    return contains;
}

//OUTPUT TESTS
for (let i = 0; i < charsOfGiven.length; i++) {
    testOutput += charsOfGiven[i];
}
console.log(testOutput);
