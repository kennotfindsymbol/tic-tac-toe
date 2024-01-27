const btn = document.querySelector('button');
btn.addEventListener('click', initGame);

function initGame(){
    const symbol1 = '💀';
    const symbol2 = '😭';
    const game = createGame(symbol1, symbol2);

    // console.table(game.board);
    render(game);
}

function updateGame(game, row, col){
    console.log(row,col)
    if(game.isSymbol(game.board[row][col])){
        return;
    }
    game.board[row][col] = game.getCurrent() ? game.getSymbol1() : game.getSymbol2();
    game.toggleCurrent();
    render(game);
    if(checkWin(game)){
        const h2 = document.querySelector('h2');
        h2.textContent = (!game.getCurrent() ? game.getSymbol1() : game.getSymbol2()) + 'won!!!';
        const cells = document.querySelectorAll('.cell');
        for(const cell of cells){
            cell.onclick = null;
            cell.classList.add('end')
        }
        // const body = document.querySelector
    }else if(checkFull(game)){
        const h2 = document.querySelector('h2');
        h2.textContent = 'Tie!!!';
        const cells = document.querySelectorAll('.cell');
        for(const cell of cells){
            cell.onclick = null;
            cell.classList.add('end')
        }
    }
    
    
    
    console.log('ok');
}

function testCheck(){
    let gameTest;
    
    gameTest = createGame('X', 'O');
    gameTest.board[0][0] = 'X';
    gameTest.board[1][0] = 'X';
    gameTest.board[2][0] = 'X';
    console.table(gameTest.board);
    console.log(checkWin(gameTest));

    gameTest = createGame('X', 'O');
    gameTest.board[0][0] = 'O';
    gameTest.board[1][0] = 'O';
    gameTest.board[2][0] = 'O';
    console.table(gameTest.board);
    console.log(checkWin(gameTest));

    gameTest = createGame('X', 'O');
    gameTest.board[0][0] = 'X';
    gameTest.board[1][1] = 'X';
    gameTest.board[2][2] = 'X';
    console.table(gameTest.board);
    console.log(checkWin(gameTest));

    gameTest = createGame('X', 'O');
    gameTest.board[0][2] = 'O';
    gameTest.board[1][1] = 'O';
    gameTest.board[2][0] = 'O';
    console.table(gameTest.board);
    console.log(checkWin(gameTest));
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
}

function createGame(symbol1 = 'X', symbol2 = 'O'){
    let current = true;
    const board = [['', '', ''],['', '', ''],['', '', '']]
    const getCurrent = () => current;
    const toggleCurrent = () => {current = !current;};
    const getSymbol1 = () => symbol1;
    const getSymbol2 = () => symbol2;
    const isSymbol = (x) => x === getSymbol1() || x === getSymbol2(); 
    return { board,
            getSymbol1,
            getSymbol2,
            isSymbol,
            getCurrent,
            toggleCurrent,
        }
}

function checkRowWin(game){
    for(let i=0;i<game.board.length;i++){
        if(game.board[i].every(x => x === game.board[i][0] && game.isSymbol(game.board[i][0]))){
            return i;
        }
    }
    return -1;
}

function checkColWin(game){
    for(let i=0;i<game.board.length;i++){
        const tmp = game.board.map(x => x[i]);
        if(tmp.every(x => x === tmp[0] && game.isSymbol(tmp[0]))){
            return i;
        }
    }
    return -1;
}

function checkDiagWin(game){
    const tmp1 = []
    for(let i=0;i<game.board.length;i++){
        tmp1.push(game.board[i][i]);
    }
    if(tmp1.every(x => x === tmp1[0] && game.isSymbol(tmp1[0]))){
        return 1;
    }
    const tmp2 = []
    for(let i=0;i<game.board.length;i++){
        tmp2.push(game.board[i][game.board.length - 1 - i]);
    }
    if(tmp2.every(x => x === tmp2[0] && game.isSymbol(tmp2[0]))){
        return 2;
    }
    return -1;
}

function checkWin(game){
    const row = checkRowWin(game)
    if(row !== -1){
        crossRow(row);
        return true;
    }
    const col = checkColWin(game)
    if(col !== -1){
        crossCol(col);
        return true;
    }
    const diag = checkDiagWin(game)
    if(diag !== -1){
        crossDiag(diag);
        return true;
    }
    
    return false;
}

function checkFull(game){
    return game.board.flat().every(x => x !== '');
}

function crossRow(row){

}

function crossCol(col){

}

function crossDiag(diag){

}

function render(game){
    const container = document.querySelector('.container');
    
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    for(let i=0;i<9;i++){
        const row = Math.floor(i / game.board.length);
        const col = i % game.board.length;
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = game.board[row][col];
        cell.onclick = () => {updateGame(game, row, col)};
        container.append(cell);
    }
    const turn = document.querySelector('h2');
    turn.textContent = (game.getCurrent() ? game.getSymbol1() : game.getSymbol2()) + '\'s turn:';

}

// testCheck()

initGame()
