function makeBoxRed(event) {
    var boxClicked = event.target
    if (boxClicked.tagName === 'DIV')
    boxClicked.style.backgroundColor = 'red'
}

var selectedSquare = document.querySelector('.squares')
sqaures.addEventListener('click', makeBoxRed)