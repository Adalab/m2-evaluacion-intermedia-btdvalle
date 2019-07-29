"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

const btn = document.querySelector(".btn");

const guessNumber = function(variableinput, variableoutput) {
  const input = document.querySelector(variableinput);
  const output = document.querySelector(variableoutput);

  function compareNumbers(event) {
    event.preventDefault();
    const inputNumber = parseInt(input.value);
    if (myRandomNumber === inputNumber) {
      output.innerHTML = "¡HAS GANADO CAMPEONA!";
    } else if (inputNumber < myRandomNumber) {
      output.innerHTML = "demasiado bajo";
    } else if (inputNumber > myRandomNumber) {
      output.innerHTML = "demasiado alto";
    }
  }
  btn.addEventListener("click", compareNumbers);
};

guessNumber(".input", ".content");

let counterNummber = 0;
function countTimes() {
  counterNummber++;
  const counter = document.querySelector(".counter");
  counter.innerHTML = `${counterNummber}`;
}
btn.addEventListener("click", countTimes);
