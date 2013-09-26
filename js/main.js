// var numberOfRows = parseInt(prompt("How many rows?"));
// var numberOfColumns = parseInt(prompt("How many columns"));
numberOfRows = 6;
numberOfColumns = 7;
var trBegin = "<tr class=\"row\">";
var tdPiece = "<td><img src=\"img/board_piece.png\"></td>";
var tdArrow = "<td class=\"arrow\"><button><img class=\"drop\" src=\"img/black_piece.png\"></button></td>";
var blackPiece = "<img src=\"img/black_piece.png\">";
var redPiece = "<img src=\"img/red_piece.png\">";

var currentPiece = blackPiece;

var plays = new Array(numberOfColumns)
for (var i = plays.length - 1; i >= 0; --i) { plays[i] = []; }

while(numberOfRows--) {
  $("#game-board").append(trBegin);
  for(i = 0; i < numberOfColumns; i++) {
    $(".row").last().append(tdPiece);
    $("img").last().attr("id", numberOfRows + "" + i)
    if(numberOfRows === 0) {
      $("#click-to-drop").append(tdArrow);
      $("button").last().attr("id", "arrow-" + i)
    }
  }
  $("#table").append("</tr>");
}

var changePieceColor = function(){
  currentPiece = currentPiece === blackPiece ?  redPiece : blackPiece;
  for(i=0; i < numberOfColumns; i++) {
    $("#arrow-" + i + " img").replaceWith(currentPiece)
  }
}

var dropPiece = function(column) {
  $("#" + plays[column].length + column).replaceWith(currentPiece);
  plays[column].push(1);
  changePieceColor();
};

$("button").click(function(){
  dropPiece(this.id.charAt(6))
});

$("#new-game").click(function() {
  location.reload();
});



