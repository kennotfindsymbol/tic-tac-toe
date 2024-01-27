function initGame(){
    const gameBoard = getGameBoard();
    const symbol1 = 'X';
    const symbol2 = 'O';
    console.table(gameBoard);
    render(gameBoard);
    
}

function testCheck(){
    const symbol1 = 'X';
    const symbol2 = 'O';
    let gameBoard = getGameBoard();
    gameBoard = getGameBoard();
    gameBoard[0][1] = 'X';
    gameBoard[1][1] = 'X';
    gameBoard[2][0] = 'X';
    console.table(gameBoard);
    console.log(checkWin(gameBoard, symbol1, symbol2));

    gameBoard = getGameBoard();
    gameBoard[2][0] = 'X';
    gameBoard[2][1] = 'X';
    gameBoard[1][2] = 'X';
    console.table(gameBoard);
    console.log(checkWin(gameBoard, symbol1, symbol2));

    gameBoard = getGameBoard();
    gameBoard[0][0] = 'X';
    gameBoard[1][1] = 'X';
    gameBoard[2][2] = 'X';
    console.table(gameBoard);
    console.log(checkWin(gameBoard, symbol1, symbol2));

    gameBoard = getGameBoard();
    gameBoard[0][2] = 'X';
    gameBoard[1][1] = 'X';
    gameBoard[2][0] = 'X';
    console.table(gameBoard);
    console.log(checkWin(gameBoard, symbol1, symbol2));
}

function getGameBoard(){
    return [['', '', ''],
            ['', '', ''],
            ['', '', '']]
}

function checkRowWin(gameBoard, symbol1, symbol2){
    for(let i=0;i<gameBoard.length;i++){
        if(gameBoard[i].every(x => x === gameBoard[i][0] && (gameBoard[i][0] === symbol1 || gameBoard[i][0] === symbol2))){
            return i;
        }
    }
    return -1;
}

function checkColWin(gameBoard, symbol1, symbol2){
    for(let i=0;i<gameBoard.length;i++){
        const tmp = gameBoard.map(x => x[i]);
        if(tmp.every(x => x === tmp[0] && (tmp[0] === symbol1 || tmp[0] === symbol2))){
            return i;
        }
    }
    return -1;
}

function checkDiagWin(gameBoard, symbol1, symbol2){
    const tmp1 = []
    for(let i=0;i<gameBoard.length;i++){
        tmp1.push(gameBoard[i][i]);
    }
    if(tmp1.every(x => x === tmp1[0] && (tmp1[0] === symbol1 || tmp1[0] === symbol2))){
        return 1;
    }
    const tmp2 = []
    for(let i=0;i<gameBoard.length;i++){
        tmp2.push(gameBoard[i][gameBoard.length - 1 - i]);
    }
    if(tmp2.every(x => x === tmp2[0] && (tmp2[0] === symbol1 || tmp2[0] === symbol2))){
        return 2;
    }
    return -1;
}

function crossRow(row){

}

function crossCol(col){

}

function crossDiag(diag){

}

function checkWin(gameBoard, symbol1, symbol2){
    const row = checkRowWin(gameBoard, symbol1, symbol2)
    if(row !== -1){
        crossRow(row);
        return true;
    }
    const col = checkColWin(gameBoard, symbol1, symbol2)
    if(col !== -1){
        crossCol(col);
        return true;
    }
    const diag = checkDiagWin(gameBoard, symbol1, symbol2)
    if(diag !== -1){
        crossDiag(diag);
        return true;
    }
    
    return false;
}

function render(gameBoard){
    const container = document.querySelector('.container');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    for(let i=0;i<9;i++){
        const rowIndex = Math.floor(i / gameBoard.length);
        const colIndex = i % gameBoard.length;
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = gameBoard[rowIndex][colIndex];
        cell.addEventListener('click', () => {console.log({rowIndex, colIndex})});
        container.append(cell);
    }
}





// testCheck()
// console.log('-----------------------------');
// console.log('-----------------------------');
// console.log('-----------------------------');
// console.log('-----------------------------');
// console.log('-----------------------------');
// console.log('-----------------------------');

initGame()