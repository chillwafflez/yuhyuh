let wordBank = ["DEKU", "EREN", "GOOK", "GOJO"];
let chosenWord = wordBank[retrieveWord()];
var charsOfGiven = [];
var charsOfGuess = [];
let numofTries = chosenWord.length;
let testOutput = "";

//gets a random word from wordbank
function retrieveWord() {
    return Math.floor(Math.random() * wordBank.length);
}

//PREPPING CHOSEN WORD
//puts all the characters from the chosen word into an array
for (let i = 0; i < chosenWord.length; i++) {
    charsOfGiven[i] = chosenWord.charAt(i);
}

for (let i = 0; i < charsOfGiven.length; i++) {
    testOutput += charsOfGiven[i];
}
console.log(testOutput);

while (numofTries <= chosenWord.length) {

    let guess = prompt("Enter your guess");
    for (let i = 0; i < guess.length; i++) {
        charsOfGiven[i] = guess.charAt(i);

    }

    numofTries++;
}



if (guess.length > chosenWord.length || guess.length < chosenWord.length) {
    console.log("too long or too short breh");
} else if (guess.localeCompare(chosenWord)) {
    console.log("noicu");
} 

function compare(chosen, guess) {
    for (let i = 0; i < chosen.length; i++) {
        
    }
}
