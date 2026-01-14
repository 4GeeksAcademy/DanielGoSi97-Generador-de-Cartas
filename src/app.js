import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here: cardRandom
  function cardRandom(){
    console.log("Function");

    const cardsTotal = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    const cardRan = Math.floor(Math.random()*cardsTotal.length);
    const cardValue = cardsTotal[cardRan];

    const cardType = ["♦", "♥", "♠", "♣"];
    const cardRanType = Math.floor(Math.random()*cardType.length);
    const cardValueType = cardType[cardRanType];

    const cardColor = ["red", "black"];
    const cardRanColor = Math.floor(Math.random()*cardColor.length);
    const cardValueColor = cardColor[cardRanColor];
/*
    colorCardHTML
*/
    document.querySelector('#valueCardNumber').textContent = cardValue;
    document.querySelector('#upSimbol').textContent = cardValueType;
    document.querySelector('#downSimbol').textContent = cardValueType;
    document.querySelector('#colorCardHTML').style.color = cardValueColor;
  }
  cardRandom();
  const btn = document.querySelector('#btnCambiar');
  btn.addEventListener(`click`, cardRandom);

    /*const cardsTotal = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    const cardRan = Math.ceil(Math.random()*cardsTotal.length);
    const cardValue = cardsTotal[cardRan];
    const cardType = ["♦", "♥", "♠", "♣"];
    const cardColor = ["red", "black"]; 
    document.querySelector('button');
    console.log(cardValue);*/
};

