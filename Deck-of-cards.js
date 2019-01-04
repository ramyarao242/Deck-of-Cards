/**
 * Created by rrao on 1/4/19.
 */


var DeckOfCards = {

    cardTypes: [],
    cardNumbers: [],
    shuffledDeckOfCards: [],

    initializeDeckOfCards: function(cardTypes,cardNumbers){

        //remove existing cards from display
        $('.cardDisplay').remove();

        //assign initial values of cardNumbers and cardTypes
        DeckOfCards.cardNumbers = cardNumbers;
        DeckOfCards.cardTypes = cardTypes;

        //new unshuffledDeckOfCars
        for(var i = 0 ; i < 4 ; i++){
            for(var j =0; j < 13 ; j++){
                var card = {cardType: cardTypes[i], cardNumber: cardNumbers[j]}
                DeckOfCards.shuffledDeckOfCards.push(card);
            }
        }
    },

    shuffle: function() {
        for( var k = DeckOfCards.shuffledDeckOfCards.length-1; k >= 0 ; k--){
            var i = Math.floor(Math.random()* k);
            [ DeckOfCards.shuffledDeckOfCards[k],DeckOfCards.shuffledDeckOfCards[i] ] = [ DeckOfCards.shuffledDeckOfCards[i],DeckOfCards.shuffledDeckOfCards[k] ];
        }
    },

    dealACard: function() {
        if(DeckOfCards.shuffledDeckOfCards.length){
            var card = DeckOfCards.shuffledDeckOfCards.splice(DeckOfCards.shuffledDeckOfCards.length-1,1);
            $("#result").append('<div class=" cardDisplay" >' + card[0].cardNumber + ' of ' + card[0].cardType + '</div>');
        } else {
            $("#result").append('<div class=" cardDisplay" > deck empty </div>');
        }
    }
}

$(document).ready(function() {
    var cardTypes = ["Hearts", "Clubs", "Spades", "Diamonds"];
    var cardNumbers = ["Ace",'2','3','4','5','6','7','8','9','10',"Jack","Queen","King"];

    DeckOfCards.initializeDeckOfCards(cardTypes,cardNumbers);

    $( "#shuffle" ).click(function(e) {
        DeckOfCards.shuffle();
    });
    $("#deal").click(function(e) {
        DeckOfCards.dealACard();
    });
    $("#reset").click(function(e) {
        DeckOfCards.initializeDeckOfCards(cardTypes,cardNumbers);
    })

});


