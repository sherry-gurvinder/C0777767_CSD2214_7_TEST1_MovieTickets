$( document ).ready(function() {


var movieseat=0;
var moviename;
$("#movie").change(function()
{
  
   moviename = $("#movie").val();
   if(moviename == "John Wick ($13.00)")
   {

   }
   if(moviename == "Gone Girl ($15.00)")
   {

   }
   if(moviename == "Arrival ($10.00)")
   {

   }
   
   alert(moviename);
})

 $(".movieseat").click(function()
 {
  
   $( this ).toggleClass("selected");
   movieseat++;
   alert(movieseat);
  

 })


});