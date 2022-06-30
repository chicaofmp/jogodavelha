let boxes = document.getElementsByClassName('box')
let currentPlayer = ''
let playerX = 'X'
let playerO = 'O'
let reset = document.querySelector('#reset')


for (let i = 0; i < boxes.length; i++) {
    let element = boxes[i];
   
    function checkBox() {
        if(element.innerHTML === '') {
            element.innerHTML = currentPlayer
            changePlayer()
        }
    }

    element.addEventListener('click', checkBox)
}

function changePlayer() {
    if(currentPlayer === playerX) {
        currentPlayer = playerO
    } else {
        currentPlayer = playerX
    }
}

function resetGame() {
    for (let i = 0; i < boxes.length; i++) {
        let element = boxes[i];
        if(element.innerHTML !== '') {
            element.innerHTML = ''
        }
    }
}

reset.addEventListener('click', resetGame)