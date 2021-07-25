$(document).ready(function(){

  //what we do
  $(".design").click(function(){
    $(".design-showing").toggle();
    $(".design-hidden").toggle();
  });

  $(".development").click(function(){
    $(".development-showing").toggle();
    $(".development-hidden").toggle();
  });

  $(".product-management").click(function(){
    $(".product-management-showing").toggle();
    $(".product-management-hidden").toggle();
  });

   //portfolio
  $("#work4").mouseover(function(){
    $("#overtext4").show();
  }).mouseout(function(){
    $("#overtext4").hide();
  });

  $("#work3").mouseover(function(){
    $("#overtext3").show();
  }).mouseout(function(){
    $("#overtext3").hide();
  });

  $("#work2").mouseover(function(){
    $("#overtext2").show();
  }).mouseout(function(){
    $("#overtext2").hide();
  });

  $("#work1").mouseover(function(){
    $("#overtext1").show();
  }).mouseout(function(){
    $("#overtext1").hide();
  });

  $("#work5").mouseover(function(){
    $("#overtext5").show();
  }).mouseout(function(){
    $("#overtext5").hide();
  });

  $("#work6").mouseover(function(){
    $("#overtext6").show();
  }).mouseout(function(){
    $("#overtext6").hide();
  });

  $("#work7").mouseover(function(){
    $("#overtext7").show();
  }).mouseout(function(){
    $("#overtext7").hide();
  });

  $("#work8").mouseover(function(){
    $("#overtext8").show();
  }).mouseout(function(){
    $("#overtext8").hide();
  });

  //contacts
  $("#inputs").submit(function(event){
    var userName = $("input#name-input").val();
    var userEmail = $("input#email-input").val();
    var userComments = $("textarea#comment").val();

    if($("input#name-input") && $("input#email-input")){
      alert(userName + ",we have received your message. Thank you for reaching out to us.");
    }else {
      return false
    }

    event.preventDefault();
  });

});
 

   