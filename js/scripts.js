$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
    $("#walrus-pic").fadeToggle("slow");
  });
  $(".clickable2").click(function() {
    $("#text-showing").toggle();
    $("#text-hidden").toggle();
  });
});
