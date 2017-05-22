var Turn = require('./../js/memory.js').turnModule;

$(document).ready(function(){

  var clicks = 0;
  var round = [];
  $(".well", this).click(function(){
    $("img", this).show();
    // value needs to not be zero and instead derive from the clicked upon well
    value = 0;
    round.push(value);
    clicks += 1;
    if (clicks === 2 ) {
      turn = new Turn(round[0], round[1]);
    }

    if (clicks % 3 === 0 && ('.well#1') ) {
      $("img").hide();
    }
    $("#answer").text(clicks);
  });
});
