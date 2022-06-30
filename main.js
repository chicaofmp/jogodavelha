let boxes = document.getElementsByClassName('box')
let currentPlayer = ''
let playerX = 'X'
let playerO = 'O'
let reset = document.querySelector('#reset')
let selectPlayerStyle = document.querySelector('#box-status').style
let boxContainer = document.querySelector('#box-container')
let winnerContainer = document.querySelector('#winner-container')





for (let i = 0; i < boxes.length; i++) {
    let element = boxes[i];
   
    function checkBox() {
        if(element.innerHTML === '') {
            element.innerHTML = currentPlayer
            winningCombinations()
            changePlayer()
            stopGame()
            
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
        winnerContainer.style.display = 'none'
    }
}
reset.addEventListener('click', resetGame)
function selectPlayerx() {
    if(currentPlayer === '') {
        let playerxName = prompt("Player X, What is your name?")
        currentPlayer = playerX
        selectPlayerStyle.display = 'none'
        boxContainer.style.display = 'grid'
        reset.style.display = 'flex'
    }
}
function selectPlayero() {
    if(currentPlayer === '') {
        let playeroName = prompt("Player O, What is your name?")
        currentPlayer = playerO
        selectPlayerStyle.display = 'none'
        boxContainer.style.display = 'grid'
        reset.style.display = 'flex'
    }
}


function winningCombinations() {

    //Checking ROWS Combinations

        if((boxes[0].innerHTML === boxes[1].innerHTML) && (boxes[1].innerHTML === boxes[2].innerHTML) && (boxes[1].innerHTML !== '')) {
            console.log("WINNER First ROW")
            return true
        } else if ((boxes[3].innerHTML === boxes[4].innerHTML) && (boxes[4].innerHTML === boxes[5].innerHTML) && (boxes[4].innerHTML !== '')) {
            console.log("WINNER Second ROW")
            return true
        } else if((boxes[6].innerHTML === boxes[7].innerHTML) && (boxes[7].innerHTML === boxes[8].innerHTML) && (boxes[8].innerHTML !== '')) {
            console.log("Winner Third ROW")
            return true
        } 
    
    //Checking Columns Combinations
    
        if((boxes[0].innerHTML === boxes[3].innerHTML) && (boxes[3].innerHTML === boxes[6].innerHTML) && (boxes[6].innerHTML !== '')) {
            console.log("WINNER First Column")
            return true
        } else if ((boxes[1].innerHTML === boxes[4].innerHTML) && (boxes[4].innerHTML === boxes[7].innerHTML) && (boxes[7].innerHTML !== '')) {
            console.log("WINNER Second Column")
            return true
        } else if((boxes[2].innerHTML === boxes[5].innerHTML) && (boxes[5].innerHTML === boxes[8].innerHTML) && (boxes[8].innerHTML !== '')) {
            console.log("Winner Third Column")
            return true
        } 
    
    //Checking Diagonal Combinations

        if((boxes[0].innerHTML === boxes[4].innerHTML) && (boxes[4].innerHTML === boxes[8].innerHTML) && (boxes[8].innerHTML !== '')) {
            console.log("WINNER First Diagonal")
            return true
        } else if ((boxes[2].innerHTML === boxes[4].innerHTML) && (boxes[4].innerHTML === boxes[6].innerHTML) && (boxes[6].innerHTML !== '')) {
            console.log("WINNER Second Diagonal")
            return true       
    }
}

function stopGame() {
    if(winningCombinations() === true) {
        if(currentPlayer === playerX){
            currentPlayer = playerO
        } else {
            currentPlayer = playerX
        }
        winnerContainer.style.display = 'flex'
        winnerContainer.innerHTML = 'The Winner is ' + currentPlayer 
        alert("Winner is " + currentPlayer)
        currentPlayer = ''
    }
}