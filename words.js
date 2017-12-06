var letters = require("./letters.js");

var words = function(word) {
    this.word = word;
    this.letter = [];
    this.allLetters = word.split('');
    
    for (var i = 0; i < this.allLetters.length; i++)
    {
        this.letter.push( new letters(this.allLetters[i]));
    }
}

module.exports = words;

