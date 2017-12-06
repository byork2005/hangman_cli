var words = require("./words.js");
var inquirer = require("inquirer");

// variables and wordbank
var wordbank = ["sword","shield","king","queen","prince","princess","knight","joust","armor","dragon","castle","gauntlet","squire","crusade","renaissance",
    "bard","duke","earl","lancelot","excalibur","ale","mead","mace","handmaiden","peasant","camelot","noble","vassal","privy","apothecary",
    "blacksmith","plague","chivalry","catapult","trebuchet","crossbow","lance","drawbridge","tower","portcullis","buttress","fletcher","longbow",
    "moat","lineage","crown","royalty","throne","merlin"]

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var currentWord;
var wrongguesses;
var tries;
var wins = 0;
var losses = 0;
var showWord = [];
var theWord;

function restart()
{
    console.log("Current Wins: " + wins + "\nCurrent Losses: " + losses + "\n----------------------------------------\n")
    inquirer.prompt([
        {
            type: "confirm",
            message: "Do you want to play hangman? ",
            name: "newGame"
        }
    ]).then(function(answer)
        {
            if(answer.newGame == true) 
            {
                startGame();
            } else 
            {
                console.log("Oh, then bye I guess...")
            }
        })
}

function startGame() {
    currentWord = new words(wordbank[RandomNum(1, wordbank.length)]); 
    wrongguesses = [];
    tries = 10;
    displayText();
}

function displayText() {
    for(var i = 0; i < currentWord.letter.length; i++)
    {
        showWord.push(currentWord.letter[i].show)
    }
    theWord = showWord.join(' ');
    console.log('\n' + theWord + '\n');
    checker()
}

function askForGuess() {
    console.log("\n--------------------\nGuesses remaining: " + tries + "\nWrong Guesses: " + wrongguesses)
    inquirer.prompt([
        {
            name: "guess",
            message: "What letter do you guess? "
        }
    ]).then(function(answer)
        {
           if (alphabet.indexOf(answer.guess) === -1)
           {
               console.log("Select a valid letter!")
               askForGuess();
           } else if (wrongguesses.indexOf(answer.guess) != -1)
           {
               console.log("You have already guessed that letter!")
               askForGuess();
           } else
           {
               logic(answer.guess);
           }
        })
}

function logic(input) {
    if(currentWord.allLetters.indexOf(input) === -1)
    {  
        tries--;
        wrongguesses.push(input + " ");
        displayText()
    } else 
    {
        for(var i = 0; i < currentWord.letter.length; i++)
        {
            if(currentWord.letter[i].letter == input) 
            {
                currentWord.letter[i].show = input.toUpperCase();
                currentWord.letter[i].guessed = true;
            }
        }
        displayText()
    }
}

function checker() {
    if(tries == 0)
    {
        console.log("Out of guesses. Game Over")
        losses++;
        restart()
    } else if(showWord.indexOf('_') === -1)
    {
        console.log("You Win!")
        wins++;
        restart();
    } else {
        showWord = [];
        askForGuess()
    }
}

restart();

// Random Number Generator
function RandomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}