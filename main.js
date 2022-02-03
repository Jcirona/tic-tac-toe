var playerOneTurn = true
var playerOneWins = null
var playerTwoWins = null
var turnNum = 0
var playerOneScore = 0
var playerTwoScore = 0




var tileOne = document.querySelector('.tile-one')
var tileTwo = document.querySelector('.tile-two')
var tileThree = document.querySelector('.tile-three')
var tileFour = document.querySelector('.tile-four')
var tileFive = document.querySelector('.tile-five')
var tileSix = document.querySelector('.tile-six')
var tileSeven = document.querySelector('.tile-seven')
var tileEight = document.querySelector('.tile-eight')
var tileNine = document.querySelector('.tile-nine')

var newGame = document.querySelector('.new-game-btn')
var clearScores = document.querySelector('.clear-scores-btn')
var resultBoard = document.querySelector('.result')
var playerOneSelect = document.querySelector('.tile')
var selectedSquare = document.querySelector('.squares')

var playerOneNewScore = document.querySelector('.player-one')
var playerTwoNewScore = document.querySelector('.player-two')





function playerOneClick(event) {
    var boxClicked = event.target
    if (boxClicked.tagName === 'DIV') {
        if (boxClicked.textContent != 'O' && playerOneTurn === true) {
            var p1Audio = new Audio('/Users/jeremey/sei/project1/sounds/PlayerOne-Select.mp3')
            p1Audio.play()
            boxClicked.textContent = 'X'
            boxClicked.style.color = 'yellow'
            boxClicked.style.animationName = 'rainbowSquareX'
            boxClicked.style.animationDuration = '0.8s'
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
            var p1Audio = new Audio('/Users/jeremey/sei/project1/sounds/PlayerTwo-Select.mp3')
            p1Audio.play()
            boxClicked.textContent = 'O'
            boxClicked.style.color = 'orange'
            boxClicked.style.animationName = 'rainbowSquareX'
            boxClicked.style.animationDuration = '0.8s'   
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
        resultBoard.style.color = 'yellow'
        playerOneScore ++
        playerOneNewScore.textContent = playerOneScore
        selectedSquare.removeEventListener('click', playerOneClick)
    } else if (playerTwoWins === true) {
        resultBoard.textContent = 'Player Two Wins!'
        resultBoard.style.color = 'orange'
        playerTwoScore ++
        playerTwoNewScore.textContent = playerTwoScore
        selectedSquare.removeEventListener('click', playerOneClick)
    } else if (turnNum === 9 && playerOneWins != true) {
        resultBoard.textContent = 'You both lose!! Tee Hee'
        resultBoard.style.color = 'salmon'
        selectedSquare.removeEventListener('click', playerOneClick)
    }
}

selectedSquare.addEventListener('click', playerOneClick)


function clearBoard () {
    tileOne.textContent = ''
    tileTwo.textContent = ''
    tileThree.textContent = ''
    tileFour.textContent = ''
    tileFive.textContent = ''
    tileSix.textContent = ''
    tileSeven.textContent = ''
    tileEight.textContent = ''
    tileNine.textContent = ''
    playerOneWins = null
    playerTwoWins = null
    resultBoard.textContent = ''
    turnNum = 0
    selectedSquare.addEventListener('click', playerOneClick)
    playerOneTurn = true



    //Just for lol's horribly primitive animation code -> shrinks boxes on reset
    tileOne.style.animationName = 'boardReset'
    tileOne.style.animationDuration = '.2s'

    tileTwo.style.animationName = 'boardReset'
    tileTwo.style.animationDuration = '.2s'

    tileThree.style.animationName = 'boardReset'
    tileThree.style.animationDuration = '.2s'

    tileFour.style.animationName = 'boardReset'
    tileFour.style.animationDuration = '.2s'

    tileFive.style.animationName = 'boardReset'
    tileFive.style.animationDuration = '.2s'

    tileSix.style.animationName = 'boardReset'
    tileSix.style.animationDuration = '.2s'

    tileSeven.style.animationName = 'boardReset'
    tileSeven.style.animationDuration = '.2s'

    tileEight.style.animationName = 'boardReset'
    tileEight.style.animationDuration = '.2s'

    tileNine.style.animationName = 'boardReset'
    tileNine.style.animationDuration = '.2s'
    
    
}

newGame.addEventListener('click', clearBoard)


function clearScoreboard () {
    playerOneScore = 0
    playerTwoScore = 0
    playerOneNewScore.textContent = '0'
    playerTwoNewScore.textContent = '0'
}

clearScores.addEventListener('click', clearScoreboard)
