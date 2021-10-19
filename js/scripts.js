$(document).ready(function() {

  $("h1").click(function() {
    $("h1").fadeOut();
  });
  

  $("p").click(function() {
    $("p").slideDown();
  });

  $("img").click(function() {
    alert("This is an image.");
  });

  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
  
});