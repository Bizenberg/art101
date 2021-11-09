
$("#challenge").append("<button id='button1'>Button</button>");
$("#problem").append("<button id='button2'>Button</button>");
$("#results").append("<button id='button3'>Button</button>");


$("#button1").click(function(){
  $(this).parent().toggleClass("special");
})

$("#button2").click(function(){
  $(this).parent().toggleClass("special");
})

$("#button3").click(function(){
  $(this).parent().toggleClass("special");
})
