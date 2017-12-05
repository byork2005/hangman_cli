var brokenWord = require("./brokenWord.js");

var newWord = function(word) {
	this.letters = [];
    var letters = this.word.split("");
    for (var i = 0; i < letters.length; i++)
    {
        this.letters.push( new brokenWord(letter[i]));
    }
}