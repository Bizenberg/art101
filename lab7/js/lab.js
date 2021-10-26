/*
 * Author: Benjamin Izenberg <bizenberg@ucsc.edu>
 * Created: 10.25.21
 * License: Public Domain
 * File: art101/lab7/js/lab.js
 * Link: bizenberg.github.io/art101
 */

 //get persons user name
function sortUserName() {
 var userName = window.prompt("Hi! Please tell me your name so I can fix it.");
 console.log("userName =", userName);


//convert string to lowercase
var lowerCase = userName.toLowerCase('');
 console.log("lowerCase =", lowerCase);


 //split string into Array
 var newArray = lowerCase.split('');
 console.log("newArray =", newArray);


 //sort the Array
 var newArraySort = newArray.sort();
 console.log("newArraySort =", newArraySort);

 //join array back to a string
 var nameSorted = newArraySort.join('');
 console.log("nameSorted =", nameSorted);

 return nameSorted;
}
 //Output
 document.writeln("I've made your name much better!: ",
  sortUserName(), "</br>");
