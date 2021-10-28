/*
 * Author: Benjamin Izenberg <bizenberg@ucsc.edu>
 * Created: 10.25.21
 * License: Public Domain
 * File: art101/lab8/js/lab.js
 * Link: bizenberg.github.io/art101
 */

//to state if the values are even
  function isEven(x){
    return (x % 2 ==0);
  }

  //test Functions
  console.log("Is 1 even? ", isEven(1));
  console.log("Is 2 even? ", isEven(2));

  //define array
  array = [5, 200, 47, 63, 2399, 69, 420]
  console.log("My array", array);

//map array
var result = array.map(isEven);
console.log("Test of eveness of array:", result);

//multiple all values in array by 2
  var result2 = array.map(function(x){
    return x * 2;
    return returned;
  })

  //log into console
  console.log("Double the array;", result2);


var outputEl = document.getElementById("output");
outputEl.innerHTML = ("The original numbers:  " + array);

var outputE2 = document.getElementById("output2");
outputE2.innerHTML = ("Is the array even:  " + result);

var outputE3 = document.getElementById("output3");
outputE3.innerHTML = ("The values multiplied by 2:  " + result2);
