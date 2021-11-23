/*
 * Author: Benjamin Izenberg <bizenberg@ucsc.edu>
 * Created: 11.22.21
 * License: Public Domain
 * File: art101/lab13/js/lab.js
 * Link: bizenberg.github.io/art101
 */



var outputEl = document.getElementById("output");


function FizzBuzz() {
  let x = '<p>'+'</p>';

  for (let i=1; i<201; i++) {
    let y = '';

    if ('num0'%3 == 0) {
        y=y + 'Fizz';
        outputStr = "Fizz";
      console.log(i, "Fizz!");
    }
    if ('num1'%5 == 0) {
      y = y + 'Buzz';
  outputStr = "Buzz";
      console.log(i, "Buzz!");
    }

    if ('num2'%7 == 0) {
      y = y + 'Boom';
        outputStr = "Boom";
      console.log(i, "Boom!");
  }
    if (y != '') {
      y = y + '!';
      x = '<p>' +x + i +': '+ y+ '</p';
    }
      console.log(i, y);


    }

outputEl.innerHTML = x;
}
