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

if(currentPlayer === playerX) {
    playerX.style.color = 'red'
}

for (let i = 0; i < boxes.length; i++) {
    let element = boxes[i];
   
    selectPlayers.style.display = 'none'
    function checkBox() {
        if(winningCombinations()){
            return
        }
        if(element.innerHTML === '') {
            element.innerHTML = currentPlayer
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
        selectPlayers.style.display = 'inline-block'
    }
}
reset.addEventListener('click', resetGame)

function selectPlayerx() {
    if(currentPlayer === '') {
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
        playeroName = 'Sem nome'
        playerxName = 'Sem nome'
    }
    selectPlayers.style.display = 'inline-block'
    showName1()
    showName2()
    playerturn()
}

function showName1() {
    showNameX.innerHTML = 'Player X: ' + playerxName
}

function showName2() {
    showNameO.innerHTML = 'Player O: ' + playeroName
}

function playerturn() {
    for (let i = 0; i < boxes.length; i++) {
        let element = boxes[i];
        
        if(currentPlayer === playerX) {
            console.log('Player X turn')
            gameStatus.style.justifyContent = 'center'
            gameStatus.innerHTML = 'Player ' + currentPlayer + ' : ' + playerxName  +  ', Your turn'
        } else if(currentPlayer === playerO) {
            console.log('Player O Turn')
            gameStatus.style.justifyContent = 'center'
            gameStatus.innerHTML = 'Player ' + currentPlayer + ' : ' + playeroName + ', Your turn'
        }
    }
}

function winningCombinations() {

    //Checking ROWS Combinations

        if((boxes[0].innerHTML === boxes[1].innerHTML) && (boxes[1].innerHTML === boxes[2].innerHTML) && (boxes[1].innerHTML !== '')) {
            console.log('WINNER First ROW')
            return true
        } else if ((boxes[3].innerHTML === boxes[4].innerHTML) && (boxes[4].innerHTML === boxes[5].innerHTML) && (boxes[4].innerHTML !== '')) {
            console.log('WINNER Second ROW')
            return true
        } else if((boxes[6].innerHTML === boxes[7].innerHTML) && (boxes[7].innerHTML === boxes[8].innerHTML) && (boxes[8].innerHTML !== '')) {
            console.log('Winner Third ROW')
            return true
        } 
    
    //Checking Columns Combinations
    
        if((boxes[0].innerHTML === boxes[3].innerHTML) && (boxes[3].innerHTML === boxes[6].innerHTML) && (boxes[6].innerHTML !== '')) {
            console.log('WINNER First Column')
            return true
        } else if ((boxes[1].innerHTML === boxes[4].innerHTML) && (boxes[4].innerHTML === boxes[7].innerHTML) && (boxes[7].innerHTML !== '')) {
            console.log('WINNER Second Column')
            return true
        } else if((boxes[2].innerHTML === boxes[5].innerHTML) && (boxes[5].innerHTML === boxes[8].innerHTML) && (boxes[8].innerHTML !== '')) {
            console.log('Winner Third Column')
            return true
        } 
    
    //Checking Diagonal Combinations

        if((boxes[0].innerHTML === boxes[4].innerHTML) && (boxes[4].innerHTML === boxes[8].innerHTML) && (boxes[8].innerHTML !== '')) {
            console.log('WINNER First Diagonal')
            return true
        } else if ((boxes[2].innerHTML === boxes[4].innerHTML) && (boxes[4].innerHTML === boxes[6].innerHTML) && (boxes[6].innerHTML !== '')) {
            console.log('WINNER Second Diagonal')
            return true       
    }
}

function draw() {

    for (let i = 0; i < boxes.length; i++) {
        let element = boxes[i];
        
        if((boxes[0].innerHTML !== '') && (boxes[1].innerHTML !== '') && (boxes[2].innerHTML !== '') && (boxes[3].innerHTML !== '') && (boxes[4].innerHTML !== '') && (boxes[5].innerHTML !== '') && (boxes[6].innerHTML !== '') && (boxes[7].innerHTML !== '') && (boxes[8].innerHTML !== '') && (winningCombinations !== true)) {

            console.log('DRAW GAME')
            gameStatus.style.display = 'none'
            winnerContainer.style.display = 'flex'
            winnerContainer.innerHTML = 'DRAW GAME!'
        }
        return true
    }
}

function stopGame() {
    if(winningCombinations() === true) {
        if(currentPlayer === playerX){
            currentPlayer = playerO
            winnerContainer.innerHTML = 'The Winner is ' + playerO + ': ' + playeroName
            gameStatus.style.display = 'none'
        } else if(currentPlayer === playerO) {
            currentPlayer = playerX
            winnerContainer.innerHTML = 'The Winner is ' + playerX + ': ' + playerxName
            gameStatus.style.display = 'none'
        }
        winnerContainer.style.display = 'flex'
    }
}