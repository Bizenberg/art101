var myUrl = "https://chroniclingamerica.loc.gov/data/batches/";

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
    var imgUrl = "https://chroniclingamerica.loc.gov/data/batches/" + data.url;
    var imgTag = "<img src=" + imgUrl + ">";
    $("#output").html(imgTag);
})
// If the request fails
.fail(function(request,error) {
    console.log(request, error);

})

}
const xhr = new XMLHttpRequest();
const url = 'https://chroniclingamerica.loc.gov/suggest/titles/?q=manh';
xhr.open('GET', url);
xhr.onreadystatechange = someHandler;
xhr.send();

//HTTP/1.1 200 OK
//Date: Mon, 28 Mar 2011 19:45:34 GMT
//Expires: Tue, 29 Mar 2011 19:45:37 GMT
//ETag: "7d786bec2ca003d86009f8ccdfd72912"
Cache-Control: max-age="86400";
Access-Control-Allow-Origin: *;
Access-Control-Allow-Headers: X-Requested-With;
Content-Length: "7045"
//Last-Modified: Mon, 28 Mar 2011 19:45:37 GMT
Content-Type: application/x-suggestions+json

[
  "manh",
    [
      "Manhasset life. (Manhasset, N.Y.) 19??-19??",
      "Manhasset mail. (Manhasset, N.Y.) 1927-1986"
    ],
    [
      "sn97063690",
      "sn95071148"
    ],
    [
      "https://chroniclingamerica.loc.gov/lccn/sn97063690/",
      "https://chroniclingamerica.loc.gov/lccn/sn95071148/"
    ]
]
