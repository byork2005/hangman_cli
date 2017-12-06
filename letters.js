
var letters = function(letter) {
    this.letter = letter,
    this.guessed = false,
    this.show = "_"
}

// var letters = [
//     {letter: "a", guessed: false, show: "_"},
//     {letter: "n", guessed: false, show: "_"},
//     {letter: "t", guessed: false, show: "_"}
// ]

module.exports = letters;
