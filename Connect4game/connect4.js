const express = require('express');
const connect4 = express();
connect4.use(express.json());

const tag = document.getElementById("header")
tag.innerText = "connect 4"
let turn = 0
let redWinnerFlag = false
let yellowWinnerFlag = false
let nobodyFlag = true
let player1 = "red"
let grid = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]

/*const gameboard = [
    ['1','2','3','4','5','6','7'],
    ['8','9','10','11','12','13','14'],
    ['15','16','17','18','19','20','21'],
    ['22','23','24','25','26','27','28'],
    ['29','30','31','32','33','34','35'],
    ['36','37','38','39','40','41','42']
]*/

const mapBoard = new Map()
//row1
mapBoard.set('1',`row1-col1`)
mapBoard.set('2',`row1-col2`)
mapBoard.set('3',`row1-col3`)
mapBoard.set('4',`row1-col4`)
mapBoard.set('5',`row1-col5`)
mapBoard.set('6',`row1-col6`)
mapBoard.set('7',`row1-col7`)
//row2
mapBoard.set('8',`row2-col1`)
mapBoard.set('9',`row2-col2`)
mapBoard.set('10',`row2-col3`)
mapBoard.set('11',`row2-col4`)
mapBoard.set('12',`row2-col5`)
mapBoard.set('13',`row2-col6`)
mapBoard.set('14',`row2-col7`)
//row3
mapBoard.set('15',`row3-col1`)
mapBoard.set('16',`row3-col2`)
mapBoard.set('17',`row3-col3`)
mapBoard.set('18',`row3-col4`)
mapBoard.set('19',`row3-col5`)
mapBoard.set('20',`row3-col6`)
mapBoard.set('21',`row3-col7`)
//row4
mapBoard.set('22',`row4-col1`)
mapBoard.set('23',`row4-col2`)
mapBoard.set('24',`row4-col3`)
mapBoard.set('25',`row4-col4`)
mapBoard.set('26',`row4-col5`)
mapBoard.set('27',`row4-col6`)
mapBoard.set('28',`row4-col7`)
//row5
mapBoard.set('29',`row5-col1`)
mapBoard.set('30',`row5-col2`)
mapBoard.set('31',`row5-col3`)
mapBoard.set('32',`row5-col4`)
mapBoard.set('33',`row5-col5`)
mapBoard.set('34',`row5-col6`)
mapBoard.set('35',`row5-col7`)
//row6
mapBoard.set('36',`row6-col1`)
mapBoard.set('37',`row6-col2`)
mapBoard.set('38',`row6-col3`)
mapBoard.set('39',`row6-col4`)
mapBoard.set('40',`row6-col5`)
mapBoard.set('41',`row6-col6`)
mapBoard.set('42',`row6-col7`)

const WinningCombination = [
    //horizontal
    ['1','2','3','4'], ['2','3','4','5'], ['3','4','5','6'], ['4','5','6','7'],
    ['8','9','10','11'], ['9','10','11','12'], ['10','11','12','13'], ['11','12','13','14'],
    ['15','16','17','18'], ['16','17','18','19'], ['17','18','19','20'], ['18','19','20','21'],
    ['22','23','24','25'], ['23','24','25','26'], ['24','25','26','27'], ['25','26','27','28'],
    ['29','30','31','32'], ['30','31','32','33'], ['31','32','33','34'], ['32','33','34','35'],
    ['36','37','38','39'], ['37','38','39','40'], ['38','39','40','41'], ['39','40','41','42'],
    //vertical
    ['1','8','15','22'], ['8','15','22','29'], ['15','22','29','36'],
    ['2','9','16','23'], ['9','16','23','30'], ['16','23','30','37'],
    ['3','10','17','24'], ['10','17','24','31'], ['17','24','31','38'],
    ['4','11','18','25'], ['11','18','25','32'], ['18','25','32','39'],
    ['5','12','19','26'], ['12','19','26','33'], ['19','26','33','40'],
    ['6','13','20','27'], ['13','20','27','34'], ['20','27','34','41'],
    ['7','14','21','28'], ['14','21','28','35'], ['21','28','35','42'],
    //lef to right diagonal
    ['4','12','20','28'],
    ['3','11','19','27'], ['11','19','27','35'],
    ['2','10','18','26'], ['10','18','26','34'], ['18','26','34','42'],
    ['1','9','17','25'], ['9','17','25','33'], ['17','25','33','41'],
    ['8','16','24','32'], ['16','24','32','40'],
    ['15','23','31','39'],
    //right to left diagonal
    ['4','10','16','22'],
    ['5','11','17','23'], ['11','17','23','29'],
    ['6','12','18','24'], ['12','18','24','30'], ['18','24','30','36'],
    ['7','13','19','25'], ['13','19','25','31'], ['19','25','31','37'],
    ['14','20','26','32'], ['20','26','32','38'],
    ['21','27','33','39'],
]
function RedOrYellow(one, two, three, four){
    //console.log(one,two,three,four)
    if (one.style.backgroundColor=='red' && two.style.backgroundColor=='red' && three.style.backgroundColor=='red' && four.style.backgroundColor == 'red') {
        redWinnerFlag = true
    } else if (one.style.backgroundColor=='yellow' && two.style.backgroundColor=='yellow' && three.style.backgroundColor=='yellow' && four.style.backgroundColor == 'yellow'){
        yellowWinnerFlag = true
    } else { 
        nobodyFlag = true
    }
}

function checkWinner(){
    for (let combo of WinningCombination){
        //console.log(document.getElementById(mapBoard.get(combo[0])),document.getElementById(mapBoard.get(combo[1])),document.getElementById(mapBoard.get(combo[2])),document.getElementById(mapBoard.get(combo[3])))
        console.log("element1: ", combo, document.getElementById(mapBoard.get(combo[0])))
        console.log("element2: ",document.getElementById(mapBoard.get(combo[1])))
        console.log("element3: ",document.getElementById(mapBoard.get(combo[2])))
        console.log("element4: ",document.getElementById(mapBoard.get(combo[3])))
        RedOrYellow(document.getElementById(mapBoard.get(combo[0])),document.getElementById(mapBoard.get(combo[1])),document.getElementById(mapBoard.get(combo[2])),document.getElementById(mapBoard.get(combo[3])))
        if (redWinnerFlag){
            console.log("Winner red")
            nobodyFlag = false
            winner = "red"
        } else if (yellowWinnerFlag){
            console.log("Winner yellow")
            winner = "yellow"
            nobodyFlag = false
        } else {
            console.log("nobody")
            winner = "nobody"
            nobodyFlag = true
        }
        const winnerName = document.getElementById("winner-name");
        winnerName.innerText = winner;
        const winnerDisplay = document.getElementById("winner-display");
        winnerDisplay.style.display = "block";
    }
}

function takeTurn(e) {
    const id = e.target.id   // 'row1-col1'   ________x
    // 'rowY-colX' 
    const colNum = id[8]
    const rowNum = id[3]
    const lowestAvailableRow = getLowestAvailableRowInColumn(colNum, grid)
    console.log(`Lowest available row: ${lowestAvailableRow}`)
    console.log(nobodyFlag)
    if (turn < 42 && nobodyFlag==true){
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
    }
    checkWinner()
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
    turn = 0
    player1 = "red"
    redWinnerFlag = false
    yellowWinnerFlag = false
    nobodyFlag = true
    const winnerName = document.getElementById("winner-name");
    winnerName.innerText = "";
    const winnerDisplay = document.getElementById("winner-display");
    winnerDisplay.style.display = "None";
    console.log('You clicked reset')
}


function getLowestAvailableRowInColumn(ColumnNumber, myGridSoItIs) {
    for (let i = 5; i >= 0; i--) {
        if (myGridSoItIs[i][ColumnNumber - 1] === null) {
            return i
        }
    }
    return null;
}
