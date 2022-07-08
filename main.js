let boxes = document.getElementsByClassName('box')
let currentPlayer = ''
let playerX = 'X'
let playerO = 'O'
let playeroName
let playerxName
let selectPlayers = document.querySelector('#select-players')
let showNameX = document.querySelector('#show-name-x')
let showNameO = document.querySelector('#show-name-o')
let gameStatus = document.querySelector('#game-status')
let reset = document.querySelector('#reset')
let selectPlayerStyle = document.querySelector('#box-status').style
let boxContainer = document.querySelector('#box-container')
let winnerContainer = document.querySelector('#winner-container')

// Audio Files
const selectPlayerAudio = new Audio()
selectPlayerAudio.src = './audio/choosingXorO.mp3'

const checkingBoxAudio = new Audio()
checkingBoxAudio.src = './audio/choosingbox.mp3'

const winnerAudio = new Audio()
winnerAudio.src = './audio/level_clear.wav'

const drawAudio = new Audio()
drawAudio.src = './audio/draw.wav'

for (let i = 0; i < boxes.length; i++) {
    let element = boxes[i];
   


    selectPlayers.style.display = 'none'

    function checkBox() {
        if(winningCombinations()){
            return
        }
        if(element.innerHTML === '') {
            element.innerHTML = currentPlayer

            if(currentPlayer === 'X') {
                element.style.color = 'red'
            } else if(currentPlayer === 'O') {
                element.style.color = 'blue'
            }
            
            checkingBoxAudio.play()
            winningCombinations()
            draw()
            changePlayer()
            playerturn()
            stopGame()            
        }
    }
    element.addEventListener('click', checkBox)
}

function changePlayer() {

    if(currentPlayer === playerX) {
        currentPlayer = playerO
        gameStatus.style.color = 'white'
        gameStatus.style.backgroundColor = 'DarkCyan'
    } else {
        currentPlayer = playerX
        gameStatus.style.color = 'darkblue'
        gameStatus.style.backgroundColor = 'Crimson'
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
        winnerContainer.style.display = 'none'
        gameStatus.style.display = 'none'
        boxes[0].style.backgroundColor = ''
        boxes[1].style.backgroundColor = ''
        boxes[2].style.backgroundColor = ''
        boxes[3].style.backgroundColor = ''
        boxes[4].style.backgroundColor = ''
        boxes[5].style.backgroundColor = ''
        boxes[6].style.backgroundColor = ''
        boxes[7].style.backgroundColor = ''
        boxes[8].style.backgroundColor = ''
    }
}
reset.addEventListener('click', resetGame)

function selectPlayerx() {
    if(currentPlayer === '') {
        selectPlayerAudio.play()
        currentPlayer = playerX
        playerturn()
        selectPlayerStyle.display = 'none'
        boxContainer.style.display = 'grid'
        reset.style.display = 'flex'
        gameStatus.style.display = 'flex'
        gameStatus.style.fontSize = '2rem'
    }
}

function selectPlayero() {
    if(currentPlayer === '') {
        selectPlayerAudio.play()
        currentPlayer = playerO
        playerturn()
        selectPlayerStyle.display = 'none'
        boxContainer.style.display = 'grid'
        reset.style.display = 'flex'
        gameStatus.style.display = 'flex'
        gameStatus.style.fontSize = '2rem'
    }
}

function askName() {
    playerxName = prompt('Player X, What is your name?')
    playeroName = prompt('Player O, What is your name?')
    if((playeroName === '') || (playeroName === null) || (playerxName === '') || (playerxName === null)) {
        playeroName = 'No Name'
        playerxName = 'No Name'
    }
    selectPlayers.style.display = 'inline-block'
    showName1()
    showName2()
    playerturn()
}

function showName1() {
    showNameX.innerHTML = 'Player X: ' + playerxName
    showNameX.style.color = 'red'
}

function showName2() {
    showNameO.innerHTML = 'Player O: ' + playeroName
    showNameO.style.color = 'blue'
}

function playerturn() {
    for (let i = 0; i < boxes.length; i++) {
        let element = boxes[i];
        
        gameStatus.style.width = '300px'
        gameStatus.style.margin = '0 auto'
        gameStatus.style.borderRadius = "10px"

        if(currentPlayer === playerX) {
            console.log('Player X turn')
            gameStatus.innerHTML = 'Player ' + currentPlayer + ' : ' + playerxName  +  ', Your turn'
        } else if(currentPlayer === playerO) {
            console.log('Player O Turn')
            gameStatus.innerHTML = 'Player ' + currentPlayer + ' : ' + playeroName + ', Your turn'
        }
    }
}

function winningCombinations() {

    //Checking ROWS Combinations

        if((boxes[0].innerHTML === boxes[1].innerHTML) && (boxes[1].innerHTML === boxes[2].innerHTML) && (boxes[1].innerHTML !== '')) {
            console.log('WINNER First ROW')
            if(boxes[0].innerHTML === 'O') {
                boxes[0].style.backgroundColor = 'aquamarine'
                boxes[1].style.backgroundColor = 'aquamarine'
                boxes[2].style.backgroundColor = 'aquamarine'
        }   else if(boxes[0].innerHTML === 'X') {
                boxes[0].style.backgroundColor = 'lightcoral'
                boxes[1].style.backgroundColor = 'lightcoral'
                boxes[2].style.backgroundColor = 'lightcoral' 
        }
            winnerAudio.play()
            return true
        } else if ((boxes[3].innerHTML === boxes[4].innerHTML) && (boxes[4].innerHTML === boxes[5].innerHTML) && (boxes[4].innerHTML !== '')) {
            console.log('WINNER Second ROW')
            if(boxes[3].innerHTML === 'O') {
                boxes[3].style.backgroundColor = 'aquamarine'
                boxes[4].style.backgroundColor = 'aquamarine'
                boxes[5].style.backgroundColor = 'aquamarine'
            }   else if(boxes[3].innerHTML === 'X') {
                boxes[3].style.backgroundColor = 'lightcoral'
                boxes[4].style.backgroundColor = 'lightcoral'
                boxes[5].style.backgroundColor = 'lightcoral'
            }
            winnerAudio.play()
            return true
        } else if((boxes[6].innerHTML === boxes[7].innerHTML) && (boxes[7].innerHTML === boxes[8].innerHTML) && (boxes[8].innerHTML !== '')) {
            console.log('Winner Third ROW')
            if(boxes[6].innerHTML === 'O') {
                boxes[6].style.backgroundColor = 'aquamarine'
                boxes[7].style.backgroundColor = 'aquamarine'
                boxes[8].style.backgroundColor = 'aquamarine'
            }   else if(boxes[6].innerHTML === 'X') {
                boxes[6].style.backgroundColor = 'lightcoral'
                boxes[7].style.backgroundColor = 'lightcoral'
                boxes[8].style.backgroundColor = 'lightcoral'
            }
            winnerAudio.play()
            return true
        } 
    
    //Checking Columns Combinations
    
        if((boxes[0].innerHTML === boxes[3].innerHTML) && (boxes[3].innerHTML === boxes[6].innerHTML) && (boxes[6].innerHTML !== '')) {
            console.log('WINNER First Column')
            if(boxes[0].innerHTML === 'O') {
                boxes[0].style.backgroundColor = 'aquamarine'
                boxes[3].style.backgroundColor = 'aquamarine'
                boxes[6].style.backgroundColor = 'aquamarine'
            }   else if(boxes[0].innerHTML === 'X') {
                boxes[0].style.backgroundColor = 'lightcoral'
                boxes[3].style.backgroundColor = 'lightcoral'
                boxes[6].style.backgroundColor = 'lightcoral'
            }
            winnerAudio.play()
            return true
        } else if ((boxes[1].innerHTML === boxes[4].innerHTML) && (boxes[4].innerHTML === boxes[7].innerHTML) && (boxes[7].innerHTML !== '')) {
            console.log('WINNER Second Column')
            if(boxes[1].innerHTML === 'O') {
                boxes[1].style.backgroundColor = 'aquamarine'
                boxes[4].style.backgroundColor = 'aquamarine'
                boxes[7].style.backgroundColor = 'aquamarine'
            }   else if(boxes[1].innerHTML === 'X') {
                boxes[1].style.backgroundColor = 'lightcoral'
                boxes[4].style.backgroundColor = 'lightcoral'
                boxes[7].style.backgroundColor = 'lightcoral'
            }
            winnerAudio.play()
            return true
        } else if((boxes[2].innerHTML === boxes[5].innerHTML) && (boxes[5].innerHTML === boxes[8].innerHTML) && (boxes[8].innerHTML !== '')) {
            console.log('Winner Third Column')
            if(boxes[2].innerHTML === 'O') {
                boxes[2].style.backgroundColor = 'aquamarine'
                boxes[5].style.backgroundColor = 'aquamarine'
                boxes[8].style.backgroundColor = 'aquamarine'
            }   else if(boxes[2].innerHTML === 'X') {
                boxes[2].style.backgroundColor = 'lightcoral'
                boxes[5].style.backgroundColor = 'lightcoral'
                boxes[8].style.backgroundColor = 'lightcoral'
            }
            winnerAudio.play()
            return true
        } 
    
    //Checking Diagonal Combinations

        if((boxes[0].innerHTML === boxes[4].innerHTML) && (boxes[4].innerHTML === boxes[8].innerHTML) && (boxes[8].innerHTML !== '')) {
            console.log('WINNER First Diagonal')
            if(boxes[0].innerHTML === 'O') {
                boxes[0].style.backgroundColor = 'aquamarine'
                boxes[4].style.backgroundColor = 'aquamarine'
                boxes[8].style.backgroundColor = 'aquamarine'
            }   else if(boxes[0].innerHTML === 'X') {
                boxes[0].style.backgroundColor = 'lightcoral'
                boxes[4].style.backgroundColor = 'lightcoral'
                boxes[8].style.backgroundColor = 'lightcoral'
            }
            winnerAudio.play()
            return true
        } else if ((boxes[2].innerHTML === boxes[4].innerHTML) && (boxes[4].innerHTML === boxes[6].innerHTML) && (boxes[6].innerHTML !== '')) {
            console.log('WINNER Second Diagonal')
            if(boxes[2].innerHTML === 'O') {
                boxes[2].style.backgroundColor = 'aquamarine'
                boxes[4].style.backgroundColor = 'aquamarine'
                boxes[6].style.backgroundColor = 'aquamarine'
            }   else if(boxes[2].innerHTML === 'X') {
                boxes[2].style.backgroundColor = 'lightcoral'
                boxes[4].style.backgroundColor = 'lightcoral'
                boxes[6].style.backgroundColor = 'lightcoral'
            }
            winnerAudio.play()
            return true       
    }
}

function draw() {

    for (let i = 0; i < boxes.length; i++) {
        let element = boxes[i];
        
        if((boxes[0].innerHTML !== '') && (boxes[1].innerHTML !== '') && (boxes[2].innerHTML !== '') && (boxes[3].innerHTML !== '') && (boxes[4].innerHTML !== '') && (boxes[5].innerHTML !== '') && (boxes[6].innerHTML !== '') && (boxes[7].innerHTML !== '') && (boxes[8].innerHTML !== '') && (winningCombinations() !== true)) {

            console.log('DRAW GAME')
            drawAudio.play()
            boxes[0].style.backgroundColor = 'gray'
            boxes[1].style.backgroundColor = 'gray'
            boxes[2].style.backgroundColor = 'gray'
            boxes[3].style.backgroundColor = 'gray'
            boxes[4].style.backgroundColor = 'gray'
            boxes[5].style.backgroundColor = 'gray'
            boxes[6].style.backgroundColor = 'gray'
            boxes[7].style.backgroundColor = 'gray'
            boxes[8].style.backgroundColor = 'gray'
            gameStatus.style.display = 'none'
            winnerContainer.style.display = 'flex'
            winnerContainer.innerHTML = 'DRAW GAME!'
        }
        return true
    }
}

function stopGame() {

    
    winnerContainer.style.borderRadius = '10px'
    winnerContainer.style.width = '300px'
    winnerContainer.style.margin = '0 auto'

    if(winningCombinations() === true) {
        if(currentPlayer === playerX){
            currentPlayer = playerO
            winnerContainer.style.backgroundColor = 'aquamarine'
            winnerContainer.innerHTML = 'The Winner is ' + playerO + ': ' + playeroName
            gameStatus.style.display = 'none'
        } else if(currentPlayer === playerO) {
            currentPlayer = playerX
            winnerContainer.style.backgroundColor = 'lightcoral'
            winnerContainer.innerHTML = 'The Winner is ' + playerX + ': ' + playerxName
            gameStatus.style.display = 'none'
        }
        winnerContainer.style.display = 'flex'
    }
}
