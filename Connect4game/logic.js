function RedOrYellow(one, two, three, four){
    let winnerOf4 = ""
    if (one=='red' && two=='red' && three=='red' && four== 'red') {
        winnerOf4 = "red"
    } else if (one=='yellow' && two=='yellow' && three=='yellow' && four== 'yellow'){
        winnerOf4 = "yellow"
    } else { 
        winnerOf4 = "nobody"
    }
    return winnerOf4
}

function checkWinner(board){
    let final_winner = ""
    for (let combo of WinningCombination){
        let one = mapBoard.get(combo[0])
        let two = mapBoard.get(combo[1])
        let three = mapBoard.get(combo[2])
        let four = mapBoard.get(combo[3])
        final_winner = RedOrYellow(board[one.i][one.j], board[two.i][two.j], board[three.i][three.j], board[four.i][four.j])
        if (final_winner === "red"){
            console.log("Winner red")
            return final_winner
        } else if (final_winner === "yellow"){
            console.log("Winner yellow")
            return final_winner
        } else {
            console.log("nobody")
        }
    } 
    return final_winner
}

function getLowestAvailableRowInColumn(ColumnNumber, grid) {
    for (let i = 5; i >= 0; i--) {
        if (grid[i][ColumnNumber - 1] === null) {
            return i
        }
    }
    return null;
}

/*module.exports = {
    RedOrYellow,
    checkWinner,
    getLowestAvailableRowInColumn
}*/