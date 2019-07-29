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
    } else if (inputNumber < myRandomNumber && inputNumber > myRandomNumber - 3) {
      output.innerHTML = "Caaasi.. pero demasiado bajo";
    } else if (inputNumber < myRandomNumber) {
      output.innerHTML = "Demasiado bajo";
    } else if (inputNumber > myRandomNumber && inputNumber < myRandomNumber + 3) {
      output.innerHTML = "Caaasi.. pero demasiado alto";
    } else if (inputNumber > myRandomNumber) {
      output.innerHTML = "Demasiado alto";
    }
  }
  btn.addEventListener("click", compareNumbers);
};

guessNumber(".input", ".content");

let counterNumber = 0;
function countTimes() {
  counterNumber++;
  const counter = document.querySelector(".counter");
  counter.innerHTML = `${counterNumber}`;
  if (counterNumber > 4 && counterNumber != 6) {
    counter.innerHTML = counter.innerHTML + "<small class='small'>¿Todavía no sabes cúal es?</small>";
  } else if (counterNumber === 6) {
    counter.innerHTML = counter.innerHTML + "<small class='small'>Ánimo, a la séptima va la vencida</small>";
  }
}
btn.addEventListener("click", countTimes);
