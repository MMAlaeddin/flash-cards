$(document).ready(function() {
  $("button#js").click(function() {
    $("p").hide();
    // body.parentElement.removeChild(p);
    //$(".js").removeClass("id");
    // $(".js").addClass(".js");
     $(".js").toggle();
    // $(".js").toggle(".flash");

    
  });

$("button#operator").click(function() {
  $("p").hide();
  // body.parentElement.removeChild(p);
  //$(".operator").removeClass("id");
  // $(".operator").addClass();
  $(".operator").toggle();
});

});