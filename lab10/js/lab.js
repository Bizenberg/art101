/*
 * Author: Benjamin Izenberg <bizenberg@ucsc.edu>
 * Created: 11.3.21
 * License: Public Domain
 * File: art101/lab10/js/lab.js
 * Link: bizenberg.github.io/art101
 */

//identify buttonvariable
var button = document.getElementById("my-button");

//identify output variable
var outputEl = document.getElementById("output");

//identify scramble variable
var new1El = document.createElement("scrambled");

//this code dosn't matter was just attempting to randomize the word but it dosnt affect the button as is so i left it
function scramble(a){a=a.split("");for(var b=a.length-1;0<b;b--){var c=Math.floor(Math.random()*(b+1));d=a[b];a[b]=a[c];a[c]=d}return a.join("")}

new1El.innerHTML = "";

//add function to the button
  button.addEventListener('click', function(scrambleText){
    inputValue = document.getElementById("feed").value;
//new array
    var newArray = inputValue.split('');
//sort array
    var jumbled = newArray.sort();
//join array
    var finalArray = jumbled.join('');
    console.log('you input:', inputValue);
    new1El.innerHTML = finalArray

});

document.body.appendChild(new1El);
