'use strict'

var display;

function fizzBuzz(id){
  display = ;
  document.getElementById(id);
  display.innerHTML = "";
  
  for(var i =1; i <= 100; i++) {
    if(is_divisibleBy3(i) && is_divisibleBy_5(i)){
      console.log("fizz buzz");
      display("fizz buzz");
    }
    else if(!is_divisibleBy_3 && !is_divisibleBy_5){
        console.log(x);
        Display(x);}
        else if (is_divisibleBy_3(i)){
          console.log("fizz");
          Display("fizz");
        }
        else if(is_divisibleBy_5){
        console.log("buzz");
          Display("buzz");
        }
      }
    }
  }
}
function is_divisibleBy_3(num){
  return ((num % 3) === 0) || false;
}

function is_divisibleBy_5(num){
  return ((num % 5) === 0) || false;
}

function Display(text){
  display.innerHTML += '<p>' + text + '</p>';
}