// wdi-fundamentals-memorygame 
// Built by Ross Lillis.

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push("queen");
cardsInPlay.push("king");

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You've found a match!");
    } else {
        alert("Sorry, try again.");
    }
}