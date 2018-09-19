//user opens page.   game starts immidiately (on loading of page)
//declare variables for the game
//an array with the list of characters for the game
var person = ['eleven', 'will', 'jonathan', 'hopper', 'joyce', 'dustin', 'lucas', 'max', 'mike'];

// selecting a random person from array
// 9 is the number of objects in array
var randomPerson = person[Math.floor(Math.random() * 9)];
var badguesses = 0;

console.log(randomPerson); // use this to confirm that the selection is random

//number of underscores for the random word selected
var personLetterSpan = document.getElementById("underscore");
var underscorePerson = "";
for (i = 0; i < randomPerson.length; i++) {
    //below represents underscorePerson variable plus the unserscore
    underscorePerson += " _ ";
}
personLetterSpan.innerText = underscorePerson;
console.log(underscorePerson)

//need an array to put ALL the letters guessed by the user
var userLetterGuesses = [];
//this represents the html element interacting with the user: id guessedLetters
var userChoices = document.getElementById("guessedLetters");
//collect the keys selected by the user
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var keyPressed = event.key;
    console.log("key pressed " + keyPressed);
    //userChoices.innerText = keyPressed;
   // var allUserGuessedLetters = document.getElementById("allGuessedLetters");
    //populates the userLetterGuesses array
   // userLetterGuesses.push(keyPressed);
    //show the contents of the array via element interacting with user: id allGuessedLetters
  //  allUserGuessedLetters.innerText = userLetterGuesses;

    //split apart the random person selected to use in a compare
    lettersRandomPerson = randomPerson.split("");
    //new array
    lettersRandomPersonArr = [];
    //push the spliced up word into new array
    lettersRandomPersonArr.push(lettersRandomPerson);
    console.log("Letters in lettersRandomPersonArr " + lettersRandomPersonArr);

    for (var i = 0; i < lettersRandomPersonArr.length; i++) {

        if (lettersRandomPersonArr.indexOf(keyPressed) < 0) {
            console.log(keyPressed)
            console.log(lettersRandomPersonArr)
            badguesses++;
            console.log("NOT IN ARRAY!!");
            
        }
        else {
           
            console.log("IN ARRAY!!");
        }


        //keep below and reverse if needed.  11:40 PM on Tuesday
        // for (var i = 0; i < lettersRandomPersonArr.length; i++) {
        //     var keyPressed = event.key;
        //     if (keyPressed !== lettersRandomPersonArr[i]) {
        //         console.log(keyPressed);
        //         console.log("NOT IN ARRAY!!");

        //         }
        //         else {
        //             console.log("IN ARRAY!!");
        //     }
    }
    //in class 

    //check if the selected letter is found in lettersRamdomPersonArr
    // var foundIt = lettersRandomPersonArr.indexOf(keyPressed);
    // console.log(keyPressed);



    //user selects up to 12 letters (numGuesses).  if the letter is in the word, add it to the 'currentWord" array
    //and display the letter on the screen "currentWord" replacing the correct dash/underscore
    //up the count of number of guesses by user: numGuesses
    //If the letter is not in the current word, add it to the 'guessedLetters' array.  
    //display the wrong letter guessed in the order selected by user: 'guessedLetters'
    //up the count of number of guesses by user: numGuesses
    //after 12 guesses, display "game over" and do something to start another game
    //if user guesses word before the 12 allowed guesses, up the winCounter
    //Display "You win!", prompt for action to start a new game
    //if user guesses reaches 12 and the word has not been guessed, display "You lose", prompt for action to start a new game

}