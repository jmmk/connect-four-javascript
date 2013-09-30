// var numberOfRows = parseInt(prompt("How many rows?"));
// var numberOfColumns = parseInt(prompt("How many columns"));
var numberOfRows = 6;
var numberOfColumns = 7;

var trBegin = "<tr class=\"row\">";
var tdPiece = "<td><img src=\"img/board_piece.png\"></td>";
var tdArrow = "<td class=\"arrow\"><button><img class=\"drop\" src=\"img/black_piece.png\"></button></td>";
var blackPiece = "<img src=\"img/black_piece.png\">";
var redPiece = "<img src=\"img/red_piece.png\">";
var i;
var j;

var currentPiece = blackPiece;
var plays = new Array(numberOfColumns);

for (i = 0; i < plays.length; i++) { plays[i] = []; }

for(i = numberOfRows - 1; i >= 0; i--) {
  $("#game-board").append(trBegin);
  for(j = 0; j < numberOfColumns; j++) {
    $(".row").last().append(tdPiece);
    $("img").last().attr("id", i + "" + j)
    if(i === 0) {
      $("#click-to-drop").append(tdArrow);
      $("button").last().attr("id", "column-" + j)
    }
  }
  $("#table").append("</tr>");
}

var changePieceColor = function() {
  currentPiece = currentPiece === blackPiece ?  redPiece : blackPiece;
  for(i=0; i < numberOfColumns; i++) {
    $("#column-" + i + " img").replaceWith(currentPiece)
  }
}

var checkFull = function() {
  for (var column in plays) {
    if(plays[column].length < numberOfRows) { return false; }
  }
  return true;
}

var checkBoard = function() {
  if(checkFull()) { $("#click-to-drop").replaceWith("<h1>TIE GAME</h1>"); }
}

var dropPiece = function(column) {
  if(plays[column].length >= numberOfRows) { return; }
  $("#" + plays[column].length + column).replaceWith(currentPiece);
  plays[column].push(1);
  changePieceColor();
  checkBoard();
};

$("button").click(function(){
  dropPiece(this.id.charAt(7))
});

$("#new-game").click(function() {
  location.reload();
});
