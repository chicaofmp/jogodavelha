let boxes = document.getElementsByClassName('box')
let currentPlayer = ''
let playerX = 'X'
let playerO = 'O'
let reset = document.querySelector('#reset')
let selectPlayerStyle = document.querySelector('#box-status').style
let boxContainer = document.querySelector('#box-container')




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
        currentPlayer = ''
        selectPlayerStyle.display = 'flex'
        boxContainer.style.display = 'none'
        reset.style.display = 'none'
    }
}

function selectPlayerx() {
    if(currentPlayer === '') {
        currentPlayer = playerX
        selectPlayerStyle.display = 'none'
        boxContainer.style.display = 'grid'
        reset.style.display = 'flex'
    }
}
function selectPlayero() {
    if(currentPlayer === '') {
        currentPlayer = playerO
        selectPlayerStyle.display = 'none'
        boxContainer.style.display = 'grid'
        reset.style.display = 'flex'
    }
}

reset.addEventListener('click', resetGame)