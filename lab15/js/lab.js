/*
 * Author: Benjamin Izenberg <bizenberg@ucsc.edu>
 * Created: 11.29.21
 * License: Public Domain
 * File: art101/lab14/js/lab.js
 * Link: bizenberg.github.io/art101
 */

var myUrl = "https://random.dog/woof.json";

$("#activate").click(callAjax);

function callAjax() {
console.log("click");
// Using the core $.ajax() method
$.ajax({
    // API endpoint
    url: myUrl,
    // Any data to send
    // data: { id: 123},
    // POST or GET request
    type: "GET",
    // data type we expect back
    dataType : "json",
})
// If the request succeeds
// data is passed back
.done(function(data) {
    console.log("Success:", data);
    //$("#output").html(JSON.stringify(data));
    var imgUrl =  data.url;
    var imgTag = "<img src=" + imgUrl + ">";
    $("#output").html(imgTag);
})
// If the request fails
.fail(function(request,error) {
    console.log(request, error);

})

}
//el fin
