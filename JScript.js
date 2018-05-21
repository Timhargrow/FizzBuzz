'use strict'

var display;

function fizzBuzz(element_id) {

  display = document.getElementById(element_id);
  display.innerHTML = "";

  for (var x = 1; x <= 100; x++) {
    if (divisibleBy3(x) && divisibleBy5(x)) {
      console.log("fizz buzz");
      Display("fizz buzz");
    }
    else {
      if (!divisibleBy3(x) && !divisibleBy5(x)) {
        console.log(x);
        Display(x);
      }
      else {
        if (divisibleBy3(x)) {
          console.log("fizz");
          Display("fizz");
        }
        else if (divisibleBy5(x)) {
          console.log("buzz");
          Display("buzz");
        }
      }
    }
  }
}

function divisibleBy3(num) {
  return ((num % 3) === 0) || false;
}

function divisibleBy5(num) {
  return ((num % 5) === 0) || false;
}

function Display(text) {
  display.innerHTML += '<p>' + text + '</p>';
}
