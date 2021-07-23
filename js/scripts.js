$(document).ready(function(){

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

});