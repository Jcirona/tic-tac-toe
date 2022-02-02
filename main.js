var playerOneTurn = true
var playerOneWins = null
var playerTwoWins = null
var turnNum = 0


var tileOne = document.querySelector('.tile-one')
var tileTwo = document.querySelector('.tile-two')
var tileThree = document.querySelector('.tile-three')
var tileFour = document.querySelector('.tile-four')
var tileFive = document.querySelector('.tile-five')
var tileSix = document.querySelector('.tile-six')
var tileSeven = document.querySelector('.tile-seven')
var tileEight = document.querySelector('.tile-eight')
var tileNine = document.querySelector('.tile-nine')

var resultBoard = document.querySelector('.result')
var playerOneSelect = document.querySelector('.tile')
var selectedSquare = document.querySelector('.squares')





function playerOneClick(event) {
    var boxClicked = event.target
    if (boxClicked.tagName === 'DIV') {
        if (boxClicked.textContent != 'O' && playerOneTurn === true) {
            boxClicked.textContent = 'X'
            turnNum++
            
            //One dense nest for player X
            if (tileOne.textContent === 'X' && tileTwo.textContent === 'X' && tileThree.textContent === 'X'){
            playerOneWins = true
            playerTwoWins = false

            } 
            else if (tileFour.textContent === 'X' && tileFive.textContent === 'X' && tileSix.textContent === 'X'){
                playerOneWins = true
                playerTwoWins = false
                } 
                else if (tileSeven.textContent === 'X' && tileEight.textContent === 'X' && tileNine.textContent === 'X'){
                    playerOneWins = true
                    playerTwoWins = false
                    } 
                    else if (tileOne.textContent === 'X' && tileFour.textContent === 'X' && tileSeven.textContent === 'X'){
                        playerOneWins = true
                        playerTwoWins = false
                        } 
                        else if (tileTwo.textContent === 'X' && tileFive.textContent === 'X' && tileEight.textContent === 'X'){
                            playerOneWins = true
                            playerTwoWins = false
                            }
                            else if (tileThree.textContent === 'X' && tileSix.textContent === 'X' && tileNine.textContent === 'X'){
                                playerOneWins = true
                                playerTwoWins = false
                                } 
                                else if (tileOne.textContent === 'X' && tileFive.textContent === 'X' && tileNine.textContent === 'X'){
                                    playerOneWins = true
                                    playerTwoWins = false
                                    } 
                                    else if (tileThree.textContent === 'X' && tileFive.textContent === 'X' && tileSeven.textContent === 'X'){
                                        playerOneWins = true
                                        playerTwoWins = false
                                        } 
                                       
            //toggle to player two
            playerOneTurn = false 

         // Player O's seriously large nest                               
        }else if(boxClicked.textContent != 'X' && playerOneTurn === false) {
            boxClicked.textContent = 'O'   
            turnNum ++
            
            if (tileOne.textContent === 'O' && tileTwo.textContent === 'O' && tileThree.textContent === 'O'){
                playerTwoWins = true
                playerOneWins = false
                } 
                else if (tileFour.textContent === 'O' && tileFive.textContent === 'O' && tileSix.textContent === 'O'){
                    playerTwoWins = true
                    playerOneWins = false
                    } 
                    else if (tileSeven.textContent === 'O' && tileEight.textContent === 'O' && tileNine.textContent === 'O'){
                        playerTwoWins = true
                        playerOneWins = false
                        } 
                        else if (tileOne.textContent === 'O' && tileFour.textContent === 'O' && tileSeven.textContent === 'O'){
                            playerTwoWins = true
                            playerOneWins = false
                            } 
                            else if (tileTwo.textContent === 'O' && tileFive.textContent === 'O' && tileEight.textContent === 'O'){
                                playerTwoWins = true
                                playerOneWins = false
                                }
                                else if (tileThree.textContent === 'O' && tileSix.textContent === 'O' && tileNine.textContent === 'O'){
                                    playerTwoWins = true
                                    playerOneWins = false
                                    } 
                                    else if (tileOne.textContent === 'O' && tileFive.textContent === 'O' && tileNine.textContent === 'O'){
                                        playerTwoWins = true
                                        playerOneWins = false
                                        } 
                                        else if (tileThree.textContent === 'O' && tileFive.textContent === 'O' && tileSeven.textContent === 'O'){
                                            playerTwoWins = true
                                            playerOneWins = false
                                            } 
            // toggle to player one                                
            playerOneTurn = true

        }
    }
    if (playerOneWins === true) {
        resultBoard.textContent = 'Player One Wins!'
    } else if (playerTwoWins === true) {
        resultBoard.textContent = 'Player Two Wins!'
    } else if (turnNum === 9 && playerOneWins != true) {
        resultBoard.textContent = 'You both lose!! Tee Hee'
    }
}

selectedSquare.addEventListener('click', playerOneClick)



