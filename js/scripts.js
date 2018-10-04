var d;
var countTotal1= 0;
var countTotal2 = 0;
// Front End!!
$(document).ready(function() {
  $("#GGH").submit(function(event){
    event.preventDefault();
   var P1=($('#PN').val());
   $("h3.f1").append("<h3>"+ P1 +"</h3>");

 });
   $("#BS2").submit(function(event){
     event.preventDefault();
    var P2=$('#PN2').val();
    $("h4.f2").append("<h4>"+ P2 +"</h4>");
  });

// Back End!!)
$("#RRR").click(function(event){
  event.preventDefault();
  var d=(Math.floor(Math.random()*5)+1);
  countTotal1 += d;
  $(".diecurrent1").text(d);
  $(".dietotal1").text(countTotal1.toString());
  if (d === 1) {
    $("#RRR").hide();

  } else {
    $("#RRR").show();
  }

});
$("#PPP").click(function(event){
  event.preventDefault();
  var d=(Math.floor(Math.random()*5)+1);
  countTotal2 += d;
  $(".diecurrent2").text(d);
  $(".dietotal2").text(countTotal2.toString());

  if (d === 1) {
    $("#PPP").hide();
    $("#PPP").show();
  } else {
    $("#PPP").show();
  }

});
});
