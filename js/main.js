console.log('sanity check')
/*----- constants -----*/
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
/*----- app's state (variables) -----*/
let board;
let turn = 'X';
let win;
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'))
const messages = document.querySelector('h2')
/*----- event listeners -----*/
document.getElementById('board').addEventListener('click',handleTurn);
/*----- functions -----*/
function init() {
    board = [
        '','','',
        '','','',
        '','',''
    ];
};
init()

function render() {
    board.forEach(function(mark,index){
        squares[index].textContent = mark;
    });
    messages.textContent = `It's ${turn}'s turn!`
};


function handleTurn(event){
    let idx = squares.findIndex(function(square){
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render()
};

function getWinner(){

};












// //player 1 selects a box (x or o)
// //player turn switches
// //display whose turn it is 
// //player 2 selects a box (x or 0)
// //players are assigned to (x, o) for the game
// //players click box to play (x or o)
// //box gets assigned that letter ( x or o)
// // once box is assigned, cannot change 
// //once (x or o) has 3 in a row or dig
// //player wins !!! winner message 
// // if tied display cats game message








// /*-------------------------------- Constants --------------------------------*/
// //winning combinations 
// const colors = {
//     square: 'null',
//     player1: '1',
//     player2: '-1',
// }
// const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
// const gameStatus = document.querySelector('.message')
// const winningMessage = () => `Player ${currentPlayer} has won!`;
// const drawMessage = () => `Game ended in a draw!`;
// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// /*---------------------------- Variables (state) ----------------------------*/
// // Variables might include (board/turn/winner)
// // let board, turn, winner
// let board = [0, 1, 2,
//             3, 4, 5,
//             6, 7, 8]

// let turn = 

// let winner = 
// /*------------------------ Cached Element References ------------------------*/
// // bubbling
// // You might choose to put your game status here
// // replay button //reset
// // Message //win or tie, pick (x,o)
// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
// document.querySelector('#replayBtn').addEventListener('click', handleRestartGame);

// const bigBox = document.querySelector('board')
// const div = document.querySelectorAll('div')


// /*----------------------------- Event Listeners -----------------------------*/

// // This is where you should put the event listener
// // for a mouse-click
// // bigBox.addEventListener('click', handleClick)
// //     function handleClick(evt){
// //     console.log(evt.target)
// // }


// // click

// // winner === false
// /*-------------------------------- Functions --------------------------------*/


// // Some functions you might choose to use:

// // Initialization function:
// // Where you set your initial state, setting up 
// // what the board will look like upon loading

// // On-Click function:
// // Set up what happens when one of the elements
// // is clicked


// // Check winner function:
// // Checks the current state of the board for
// // a winner and changes the state of the winner
// // variable if so


// // Render function:
// // Displays the current state of the board
// // on the page, updating the elements to reflect
// // either X or O depending on whose turn it is

// //Reset
// // reset()

// // function reset() {
// //     winner = false;
// // }

// // //Game Play 
// // function gamePlay() {
// //     //win
// //     //tie

// //     render(play);
// // }
// // //
// // function render(play){}
    
// // 
// function handleCellClick(clickedCellEvent) {
//     /* We will save the clicked html element in a variable for easier further use */    
//     const clickedCell = clickedCellEvent.target;
//     /*
//     Here we will grab the 'data-cell-index' attribute from the clicked cell to identify where that cell is in our grid. 
//     Please note that the getAttribute will return a string value. Since we need an actual number we will parse it to an 
//     integer(number)
//     */
//     const clickedCellIndex = parseInt(
//         clickedCell.getAttribute('id')
//     );
//     /* 
//     Next up we need to check whether the call has already been played, 
//     or if the game is paused. If either of those is true we will simply ignore the click.
//     */
//     if (gameState[clickedCellIndex] !== "" || !gameActive) {
//         return;
//     }
//     /* 
//     If everything if in order we will proceed with the game flow
//     */    
//         handleCellPlayed(clickedCell, clickedCellIndex);
//         handleResultValidation();
//     }


// !!! CODE 2 !!!
// const statusDisplay = document.querySelector('.game--status');

// let gameActive = true;
// let currentPlayer = "X";
// let gameState = ["", "", "", "", "", "", "", "", ""];

// const winningMessage = () => `Player ${currentPlayer} has won!`;
// const drawMessage = () => `Game ended in a draw!`;
// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// statusDisplay.innerHTML = currentPlayerTurn();

// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// function handleCellPlayed(clickedCell, clickedCellIndex) {
//     gameState[clickedCellIndex] = currentPlayer;
//     clickedCell.innerHTML = currentPlayer;
// }

// function handlePlayerChange() {
//     currentPlayer = currentPlayer === "X" ? "O" : "X";
//     statusDisplay.innerHTML = currentPlayerTurn();
// }

// function handleResultValidation() {
//     let roundWon = false;
//     for (let i = 0; i <= 7; i++) {
//         const winCondition = winningConditions[i];
//         let a = gameState[winCondition[0]];
//         let b = gameState[winCondition[1]];
//         let c = gameState[winCondition[2]];
//         if (a === '' || b === '' || c === '') {
//             continue;
//         }
//         if (a === b && b === c) {
//             roundWon = true;
//             break
//         }
//     }

//         if (roundWon) {
//         statusDisplay.innerHTML = winningMessage();
//         gameActive = false;
//         return;
//     }

//     let roundDraw = !gameState.includes("");
//     if (roundDraw) {
//         statusDisplay.innerHTML = drawMessage();
//         gameActive = false;
//         return;
//     }

//     handlePlayerChange();
// }

// function handleCellClick(clickedCellEvent) {
//     const clickedCell = clickedCellEvent.target;
//     const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

//     if (gameState[clickedCellIndex] !== "" || !gameActive) {
//         return;
//     }

//     handleCellPlayed(clickedCell, clickedCellIndex);
//     handleResultValidation();
// }

// function handleRestartGame() {
//     gameActive = true;
//     currentPlayer = "X";
//     gameState = ["", "", "", "", "", "", "", "", ""];
//     statusDisplay.innerHTML = currentPlayerTurn();
//     document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
// }

// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
// document.querySelector('.game--restart').addEventListener('click', handleRestartGame);