$( document ).ready(function() {
  
   
   //$('td').addClass('inactiveclick');

var movieseat=0;
var moviename;
var price=0;

$("#movie").change(function()
{
   $('td').addClass('activeclick');
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
   if($( this).hasClass( "selected" ))
   {
      movieseat--;
      $( this ).toggleClass("selected");
   }
   else
   {
      $( this ).toggleClass("selected");
      movieseat++;
   }
 
   document.getElementById("seats").innerHTML=movieseat;
   
   $("#finalpayment").val(movieseat*price);
   
  

 })
 var flag=0;
 $("#buyseat").click(function() {
   debugger;
   var result;
   
   if(flag==0)
   {

      var result = confirm("Press 'ok' to confirm");
      if (result == true)
      {
         $("td").each(function() {
           
            if($( this).hasClass( "selected" ))
               {
                  $( this ).addClass("occupied");
               }
      
            // compare id to what you want
            flag = 1;
      });
         $('td').removeClass('activeclick');
         $('td').addClass('inactiveclick');
         $("#finalpayment").removeAttr("disabled"); 
        
      if(flag==1)
      {
         $('#buyseatbtn').removeClass('inactiveclick');
      }
       
      } 
      
      else
      {
         $('td').addClass('activeclick');
      }
      return false;
   }
   else
   {
      $("#finalpayment").removeAttr("disabled"); 
      $('td').removeClass('inactiveclick');
      flag = 1;
   }

   


    
 })


});