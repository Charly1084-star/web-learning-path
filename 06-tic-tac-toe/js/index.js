const cells = document.querySelectorAll('.cell');
const tittleHeader = document.querySelector('#tittleHeader');
const xPlayerDisplay = document.querySelector('#xPlayerDisplay');
const oPlayerDisplay = document.querySelector('#oPlayerDisplay');
const restartBtn = document.querySelector('#restart-btn');

// Inizialize the game state
let player = 'X';
let isPauseGame = false;
let isGameStart = false;

// Array to store the game state
let inputCells = [
                    '', '', '',
                    '', '', '',
                    '', '', ''];

// Array to store the winConditions
const winConditions = [
     [0, 1, 2], [3, 4, 5], [6, 7, 8],    // Rows
     [0, 3, 6], [1, 4, 7], [2, 5, 8],    // Columns
     [0, 4, 8], [2, 4, 6]                // Diagonals
];

// Add event listeners to each cell
cells.forEach((cell, index) => {
     cell.addEventListener('click', () => tapCell(cell, index))
})

function tapCell(cell, index) {
     /*console.log(cell)
     console.log('Index: ' + index) */
     if (cell.textContent == '' && 
          !isPauseGame
     ) {
          isGameStart = true;
          updateCell(cell, index);
          
          // Do a random pick if there are not resultss
          if(!checkWinner()){
               changePlayer()
               randomPick()
          }
          
     }
}

function updateCell(cell, index) {
     cell.textContent = player;
     inputCells[index] = player;
     cell.style.color = (player == 'X') ? '#1892EA' : '#A737FF';
}

function changePlayer() {
     player = (player === 'X') ? 'O' : 'X'

}

function randomPick() {
     // Pause the game to allow the computer to make a move
     isPauseGame = true
     setTimeout(() => {
          let randomIndex 
          do {
               randomIndex = Math.floor(Math.random() * inputCells.length)
          } while (
               inputCells[randomIndex] != ''
          )
          
          // console.log('Computer picks index: ' + randomIndex)
          // Update the cell with the computer's move

          updateCell(cells[randomIndex], randomIndex,player) 
          // check if the computer wins
          if (!checkWinner()) {
               // Change the player back to the human player
               changePlayer()
               isPauseGame = false
               return
          }
          player = (player === 'X') ? 'O' : 'X' // Change player back to human

     }, 1000) // Delay 1sec for de computer's move
}

function checkWinner() {
     for (const [a,b,c] of winConditions){
          // Check each winning condition
          /*this would check each cell index,
          if there are three cells in a row that
          contain the same symbol, so the player
          wins*/
          if (inputCells[a] == player &&
               inputCells[b] == player &&
               inputCells[c] == player 
          ) {
               declareWinner([a,b,c])
               return true
          }

          // Check for a draw (in all cells)
          if (inputCells.every((cell) => cell != '')){
               declareDraw()
               return true
          }
     }
}

function declareWinner(winIndices) {
     // console.log(player + 'wins');
     tittleHeader.textContent = `${player} Wins`;
     isPauseGame = true;

     /*winnindIndices.forEach(index => {
          cells[index].style.background = '#A737FF';
          cells[index].style.color = '#17122A';
     });*/


     // highlight the winning cells
     //console.log(winnindIndices)

     /*winIndices.forEach((index) => {
          cells[index].style.background = '#SA2343'
          cells[index].style.color = '#17122A'
     })*/

     winIndices.forEach((index) => 
          cells[index].style.background = '#2A2343'
     )
     // Show the restart button
     restartBtn.style.visibility = 'visible';
     
}

function declareDraw() {
     tittleHeader.textContent = 'Draw!';
     isPauseGame = true;
     restartBtn.style.visibility = 'visible';
}

restartBtn.addEventListener('click', () => {
     restartBtn.style.visibility = 'hidden';
     inputCells.fill('')
     cells.forEach((cell) => {
          cell.textContent = '';
          cell.style.background = '';
     })
     isPauseGame = false
     isGameStart = false
     tittleHeader.textContent = 'Choose';
})

function choosePlayer(selectedPlayer) {
     // Ensure only one player is selected
     //console.log(selectedPLayer + ' selected');
     if(!isGameStart) {
          // overwrite the selected player value
          player = selectedPlayer

          if (player == 'X') {
               // highlight X player
               xPlayerDisplay.classList.add('player-active')
               oPlayerDisplay.classList.remove('player-active')
          } else {
               // highlight O player
               xPlayerDisplay.classList.remove('player-active')
               oPlayerDisplay.classList.add('player-active')
          }
     } 
}
