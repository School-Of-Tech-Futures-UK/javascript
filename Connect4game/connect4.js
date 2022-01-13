const tag = document.getElementById("header")
tag.innerText = "connect 4"
let turn = 0
let player1 = "red"
let grid = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]

function takeTurn(e) {
    const id = e.target.id   // 'row1-col1'   ________x
    // 'rowY-colX' 
    const colNum = id[8]
    const rowNum = id[3]
    const lowestAvailableRow = getLowestAvailableRowInColumn(colNum, grid)
    console.log(`Lowest available row: ${lowestAvailableRow}`)

    if (lowestAvailableRow !== null) {
        turn++
        if (player1 === "red") {
            grid[lowestAvailableRow][colNum - 1] = "red"
            document.getElementById(`row${lowestAvailableRow + 1}-col${colNum}`).style.backgroundColor = 'red';
            player1 = "yellow"
        } else {
            grid[lowestAvailableRow][colNum - 1] = "yellow"
            document.getElementById(`row${lowestAvailableRow + 1}-col${colNum}`).style.backgroundColor = 'yellow';
            player1 = "red"
        }
    }
    console.log(`You clicked column ${colNum}`)
    console.log(`Turn number ${turn}`)
    //console.log(grid)
}

function Reset(e) {
    for (let i=1; i<=6; i++){
        for (let j=1; j<=7; j++){
            document.getElementById(`row${i}-col${j}`).style.backgroundColor = 'white'
        }
    }
    grid = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ]  
    console.log('You clicked reset')
    return grid;
}


function getLowestAvailableRowInColumn(ColumnNumber, myGridSoItIs) {
    for (let i = 5; i >= 0; i--) {
        if (myGridSoItIs[i][ColumnNumber - 1] === null) {
            return i
        }
    }
    return null;
}
