

const cards =[
	{
	rank:'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},

{
	rank:'queen',
	suit: 'diamonds',
	cardImage:'images/queen-of-diamonds.png'

},

{
	rank:'king',
	suit: 'hearts',
	cardImage:'images/king-of-hearts.png'
},

{
	rank:'king',
	suit: 'diamonds',
	cardImage:'images/king-of-diamonds.png'
}

];

const cardsInPlay =[ ];

function checkForMatch(){

	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}

}
function flipCard (){

var cardId = this.getAttribute(rank);

checkForMatch();

console.log("user flipped" + ' '+ cards[cardId].rank);

cardsInPlay.push(cards[cardId].rank);

console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

 cardElement.setAttribute(cards[cardId].cardImage);


if ( cardsInPlay.length === 2){

} else if ( cardsInPlay[0] === cardsInPlay[3]) {
alert("You found a match!");
} else (cardsInPlay[0] !== cardsInPlay[3])
alert("Sorry, try again");

}

function createBoard(){

	for (var i = 0; i < cards.length; i++) {

	var cardElement = document.createElement('img');

        cardElement.setAttribute(src="images/back.png" );

        cardElement.setAttribute( game-board.cards.array[i]);

        cardElement.addEventListener('click',flipCard);

        cardElement.appendChild('game-board');
     
}
// createBoard();
};
createBoard();



















