var playerOneTurn = true;
var playerTwoTurn = false;

if (playerOneTurn === true){
    var playerOneSelect = document.querySelector('.tile')
    function makeBoxRed(event) {
        var boxClicked = event.target
        if (boxClicked.tagName === 'DIV')
        boxClicked.textContent = 'X'
    }

    var selectedSquare = document.querySelector('.squares')
    selectedSquare.addEventListener('click', makeBoxRed)

}