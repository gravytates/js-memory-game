(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Turn(turn1, turn2) {
  this.turn1 = turn1;
  this.turn2 = turn2;
}

// function Card(image) {
//   this.image = image
// }

Turn.prototype.match = function() {

};


exports.turnModule = Turn;

},{}],2:[function(require,module,exports){
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

},{"./../js/memory.js":1}]},{},[2]);
