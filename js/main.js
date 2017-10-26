// wdi-fundamentals-memorygame 
// Developed by Ross Lillis.

// Declare and initialize program variables(arrays)
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// Function related to checking for a card match.
var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You've found a match!");
    } else {
        alert("Sorry, try again.");
    }
};

// Function with logic related to flipping over a card and displaying result.
var flipCard = function(cardId) {
    var cardOne = cards[0];
    var cardTwo = cards[2];

    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
};

flipCard(0);
flipCard(2);
