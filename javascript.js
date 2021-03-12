$( document ).ready(function() {
  

var movieseat=0;
var moviename;
var price=0;

$("#movie").change(function()
{
  
   moviename = $("#movie").val();
   if(moviename == "John Wick ($13.00)")
   {
      document.getElementById("price").innerHTML="13.00";
      document.getElementById("finalpayment").innerHTML="13.00";
      price=13;
   }
   if(moviename == "Gone Girl ($15.00)")
   {
      document.getElementById("price").innerHTML="15.00";
      document.getElementById("finalpayment").innerHTML="15.00";
      price=15;
   }
   if(moviename == "Arrival ($10.00)")
   {
      document.getElementById("price").innerHTML="10.00";
      document.getElementById("finalpayment").innerHTML="10.00";
      price=10;
   }
   
  
})

 $(".movieseat").click(function()
 {
   document.getElementById("finalpayment").innerHTML="";
   document.getElementById("seats").innerHTML="";
   $( this ).toggleClass("selected");
   movieseat++;
   
   document.getElementById("seats").innerHTML=movieseat;
   
   $("#finalpayment").val(movieseat*price);
   
  

 })


});