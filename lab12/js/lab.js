/*
 * Author: Benjamin Izenberg <bizenberg@ucsc.edu>
 * Created: 11.15.21
 * License: Public Domain
 * File: art101/lab12/js/lab.js
 * Link: bizenberg.github.io/art101
 */


//create the sort function. Named SortingHat despite not being a harry potter program
 function sortingHat(str){
   var length = str.length;
   var mod = length % 4;
    if (mod == 0) {
        return "BLUE";
    }

  else if (mod ==1){
      return "RED";
    }

  else if (mod ==2){
      return "GREEN";
  }

  else if (mod ==3){
        return "YELLOW";
  }
}
//display output in a sentence in the same box as the results.
  var myButton = document.getElementById("button");
  myButton.addEventListener("click", function() {
      var name = document.getElementById("input").value;
      var house = sortingHat(name);
      newText = "<p>YOU HAVE BEEN ASSIGNED TO TEAM: " + house + "</p>";
      document.getElementById("output").innerHTML = newText;

  })
