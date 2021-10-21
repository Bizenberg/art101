/*
 * Author: Benjamin Izenberg <bizenberg@ucsc.edu>
 * Created: 10.20.21
 * License: Public Domain
 * File: art101/lab6/js/lab.js
 * Link: bizenberg.github.io/art101
 */

//my different transportations
myTransport = [" bus", " car", " skateboard", " motorcycle"]

// Define Variables
myMainRide = {
  make : "Subaru",
  model : "Outback",
  color : "Emerald",
  year : "1998",

// calculate
age : function() {
    return 2021 - year;
  }
}

//output
document.writeln("Using " + myTransport + " to get around?<br>");

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
