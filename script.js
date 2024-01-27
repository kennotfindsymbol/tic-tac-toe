function initGame(){
    const gameBoard = getGameBoard();
    console.table(gameBoard);
   
    
}

function testCheck(){
    let gameBoard = getGameBoard();
    gameBoard = getGameBoard();
    gameBoard[0][1] = 'X';
    gameBoard[1][1] = 'X';
    gameBoard[2][0] = 'X';
    console.table(gameBoard);
    console.log(checkWin(gameBoard));

    gameBoard = getGameBoard();
    gameBoard[2][0] = 'X';
    gameBoard[2][1] = 'X';
    gameBoard[1][2] = 'X';
    console.table(gameBoard);
    console.log(checkWin(gameBoard));

    gameBoard = getGameBoard();
    gameBoard[0][0] = 'X';
    gameBoard[1][1] = 'X';
    gameBoard[2][2] = 'X';
    console.table(gameBoard);
    console.log(checkWin(gameBoard));

    gameBoard = getGameBoard();
    gameBoard[0][2] = 'X';
    gameBoard[1][1] = 'X';
    gameBoard[2][0] = 'X';
    console.table(gameBoard);
    console.log(checkWin(gameBoard));
}

function getGameBoard(){
    return [['_', '_', '_'],
            ['_', '_', '_'],
            ['_', '_', '_']]
}

function checkRowWin(gameBoard){
    for(let i=0;i<gameBoard.length;i++){
        if(gameBoard[i].every(x => x === gameBoard[i][0] && gameBoard[i][0] !== '_')){
            return i;
        }
    }
    return -1;
}

function checkColWin(gameBoard){
    for(let i=0;i<gameBoard.length;i++){
        const tmp = gameBoard.map(x => x[i]);
        if(tmp.every(x => x === tmp[0] && tmp[0] !== '_')){
            return i;
        }
    }
    return -1;
}

function checkDiagWin(gameBoard){
    const tmp1 = []
    for(let i=0;i<gameBoard.length;i++){
        tmp1.push(gameBoard[i][i]);
    }
    if(tmp1.every(x => x === tmp1[0] && tmp1[0] !== '_')){
        return 1;
    }
    const tmp2 = []
    for(let i=0;i<gameBoard.length;i++){
        tmp2.push(gameBoard[i][gameBoard.length - 1 - i]);
    }
    if(tmp2.every(x => x === tmp2[0] && tmp2[0] !== '_')){
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

function checkWin(gameBoard){
    const row = checkRowWin(gameBoard)
    if(row !== -1){
        crossRow(row);
        return true;
    }
    const col = checkColWin(gameBoard)
    if(col !== -1){
        crossCol(col);
        return true;
    }
    const diag = checkDiagWin(gameBoard)
    if(diag !== -1){
        crossDiag(diag);
        return true;
    }
    
    return false;
}
testCheck()
console.log('-----------------------------');
console.log('-----------------------------');
console.log('-----------------------------');
console.log('-----------------------------');
console.log('-----------------------------');
console.log('-----------------------------');

initGame()