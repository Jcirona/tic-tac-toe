var playerOneTurn = true
var winConditions = []


var playerOneSelect = document.querySelector('.tile')
var selectedSquare = document.querySelector('.squares')


// function to place an X or a O -- changes each click and doesn't overwrite previously selected squares



function playerOneClick(event) {
    var boxClicked = event.target
    if (boxClicked.tagName === 'DIV') {
        if (boxClicked.textContent != 'O' && playerOneTurn === true) {
            boxClicked.textContent = 'X'
            playerOneTurn = false 
        }else if(boxClicked.textContent != 'X' && playerOneTurn === false) {
            boxClicked.textContent = 'O'    
            playerOneTurn = true
        }
    }
}

selectedSquare.addEventListener('click', playerOneClick)

