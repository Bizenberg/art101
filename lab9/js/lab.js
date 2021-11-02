/*
 * Author: Benjamin Izenberg <bizenberg@ucsc.edu>
 * Created: 11.1.21
 * License: Public Domain
 * File: art101/lab9/js/lab.js
 * Link: bizenberg.github.io/art101
 */

 var outputEl = document.getElementById("output");
 console.log("outputEl:", outputEl);

 var new1El = document.createElement("p");
 new1El.id = "purple";
 new1El.innerHTML = "What is the best color?";
 console.log("new1El:", new1El);

 var new2El = document.createElement("output");
 new2El.id = "next";
 new2El.innerHTML = "Nope! I'ts Yellow";
 console.log("new2El:", new2El);

 //outputEl.appendChild(new1El);
 //ouputEl.appendChild(new2El);
 document.body.appendChild(new2El);
 document.body.appendChild(new2El);
