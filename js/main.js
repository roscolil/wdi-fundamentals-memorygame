// wdi-fundamentals-memorygame
// Developed by Ross Lillis for GA.

// Card object array.
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

/* Checks for a match between the 2 chosen cards and displays 
   the appropriate message. */

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    winCount();
  }
  else {
    alert("Sorry, try again.");
    lossCount();
  }
};

/* Assigns attribute to cardId variable and logs message to console 
   while adding this value to cardsInPlay array. If two cards are played
   it calls the checkForMatch function. */

var flipCard = function() {
  var cardId = this.getAttribute('data-id');

  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log("User flipped " + cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].suit);

  this.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

/* On click, calls flipCard function and creates image elements for 
   the length of the cards array. */

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');

    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

// Win/loss score counters.

var winCount = function() {
  var wins = 0;
  wins += 1;
  document.getElementById('wins').innerHTML = wins;
};

var lossCount = function() {
  var losses = 0;
  losses += 1;
  document.getElementById('losses').innerHTML = losses;
};

// Click event resets game board images.

  var resetBoard = function() {
    var resetImage = document.getElementById('game-board');
    // Am i on the right track here? Images aren't resetting and
    // if i take the easy way out and just reload the page then my 
    // counters reset as well...
    for (var i = 0; i < cards.length; i++) {
      resetImage[i].setAttribute('src', 'images/back.png').childNodes;
      resetImage.setAttribute('data-id', i);
    } 
};  

//Calling main function.

createBoard();

// Call resetBoard function when button clicked.

var resetButton = document.querySelector('button');
resetButton.addEventListener('click', resetBoard);

