/*
 * Author: Benjamin Izenberg <bizenberg@ucsc.edu>
 * Created: 11.3.21
 * License: Public Domain
 * File: art101/lab10/js/lab.js
 * Link: bizenberg.github.io/art101
 */

//identify the button for the challenge box
$("#challenge").append("<button id='c-button'>Button</button>");
//identify the button for the problem box
$("#problem").append("<button id='p-button'>Button</button>");
//identify the button for the results box
$("#results").append("<button id='r-button'>Button</button>");


//button's function to change the color
//for challenges
$("#c-button").click(function(){
  $(this).parent().toggleClass("special");
})

//for problems
$("#p-button").click(function(){
  $(this).parent().toggleClass("special");
})

//for results
$("#r-button").click(function(){
  $(this).parent().toggleClass("special");
})
