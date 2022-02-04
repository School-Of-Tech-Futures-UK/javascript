//const logicModule = require('logic.js')

document.getElementById("header").innerText = "Connect Four Game by Anna"
const turn_beep = document.getElementById("beepSound")
const turn_win_sound = document.getElementById("winningSound")
document.getElementById("name1").disabled = true
document.getElementById("name2").disabled = true
let current_winner=""
let turn = 0
let player1 = "red"
let winner = ""
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

mapBoard.set('1',{"i":0,"j":0})
mapBoard.set('2',{"i":0,"j":1})
mapBoard.set('3',{"i":0,"j":2})
mapBoard.set('4',{"i":0,"j":3})
mapBoard.set('5',{"i":0,"j":4})
mapBoard.set('6',{"i":0,"j":5})
mapBoard.set('7',{"i":0,"j":6})
//row2

mapBoard.set('8',{"i":1,"j":0})
mapBoard.set('9',{"i":1,"j":1})
mapBoard.set('10',{"i":1,"j":2})
mapBoard.set('11',{"i":1,"j":3})
mapBoard.set('12',{"i":1,"j":4})
mapBoard.set('13',{"i":1,"j":5})
mapBoard.set('14',{"i":1,"j":6})
//row3

mapBoard.set('15',{"i":2,"j":0})
mapBoard.set('16',{"i":2,"j":1})
mapBoard.set('17',{"i":2,"j":2})
mapBoard.set('18',{"i":2,"j":3})
mapBoard.set('19',{"i":2,"j":4})
mapBoard.set('20',{"i":2,"j":5})
mapBoard.set('21',{"i":2,"j":6})
//row4

mapBoard.set('22',{"i":3,"j":0})
mapBoard.set('23',{"i":3,"j":1})
mapBoard.set('24',{"i":3,"j":2})
mapBoard.set('25',{"i":3,"j":3})
mapBoard.set('26',{"i":3,"j":4})
mapBoard.set('27',{"i":3,"j":5})
mapBoard.set('28',{"i":3,"j":6})
//row5

mapBoard.set('29',{"i":4,"j":0})
mapBoard.set('30',{"i":4,"j":1})
mapBoard.set('31',{"i":4,"j":2})
mapBoard.set('32',{"i":4,"j":3})
mapBoard.set('33',{"i":4,"j":4})
mapBoard.set('34',{"i":4,"j":5})
mapBoard.set('35',{"i":4,"j":6})
//row6

mapBoard.set('36',{"i":5,"j":0})
mapBoard.set('37',{"i":5,"j":1})
mapBoard.set('38',{"i":5,"j":2})
mapBoard.set('39',{"i":5,"j":3})
mapBoard.set('40',{"i":5,"j":4})
mapBoard.set('41',{"i":5,"j":5})
mapBoard.set('42',{"i":5,"j":6})

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

let state = {
    "grid" : grid,
    "turn" : turn,
    "winner" : winner,
    "player1" : player1,
    "nobody" : true,
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function triggerAnimation(ColumnNumber, row, grid, player1){
    for (let i = 0; i <= row; i++) {
        await sleep (200)
        if (grid[i][ColumnNumber - 1] === null && player1 ==='red') {
            document.querySelector('#column-'+(ColumnNumber-1)+' .row-'+i+' circle').setAttribute('class','redanim')
        } else if (grid[i][ColumnNumber - 1] === null && player1 ==='yellow') {
            document.querySelector('#column-'+(ColumnNumber-1)+' .row-'+i+' circle').setAttribute('class','yellowanim')
        }
        if(i>0){
            document.querySelector('#column-'+(ColumnNumber-1)+' .row-'+(i-1)+' circle').setAttribute('class','free')
        }
    }
}

async function takeTurn(e) {
    turn_beep.play()
    const id = e.target.id 
    const colNum = id[8]
    const lowestAvailableRow = getLowestAvailableRowInColumn(colNum, state.grid)
    if (state.turn < 42 && state.nobody==true){
        if (lowestAvailableRow !== null) {
            state.turn++
            triggerAnimation(colNum, lowestAvailableRow-1, state.grid, state.player1)
            if (state.player1 === "red") {
                await sleep(200*(lowestAvailableRow+1))
                state.grid[lowestAvailableRow][colNum - 1] = "red"
                document.querySelector('#column-'+(colNum-1)+' .row-'+lowestAvailableRow+' circle').setAttribute('class','red')
                state.player1 = "yellow"
            } else {
                await sleep(200*(lowestAvailableRow+1))
                state.grid[lowestAvailableRow][colNum - 1] = "yellow"
                document.querySelector('#column-'+(colNum-1)+' .row-'+lowestAvailableRow+' circle').setAttribute('class','yellow')
                state.player1 = "red"
            }
        }
    }
    const final_winner = checkWinner(state.grid)
    state.winner = final_winner
    if (state.winner === "red" || state.winner === "yellow"){
        state.nobody = false
        document.getElementById("name1").disabled = false
        document.getElementById("name2").disabled = false
    }
    const winnerName = document.getElementById("winner-name");
    winnerName.innerText = state.winner;
    const winnerDisplay = document.getElementById("winner-display");
    winnerDisplay.style.display = "block";
    console.log(`You clicked column ${colNum}`)
}

function Reset(e) {
    document.getElementById("name1").disabled = true
    document.getElementById("name2").disabled = true

    document.getElementById('winnerlist').innerHTML = ''

    for (let i=0; i<=5; i++){
        for (let j=0; j<=6; j++){
           document.querySelector('#column-'+(j)+' .row-'+i+' circle').setAttribute('class','free')
        }
    }
    state.grid = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ] 
    state.turn = 0
    state.player1 = "red"
    state.winner = ""
    state.nobody = true
    const winnerName = document.getElementById("winner-name");
    winnerName.innerText = "";
    const winnerDisplay = document.getElementById("winner-display");
    winnerDisplay.style.display = "None";
    console.log('You clicked reset')
}

const getWinners = async () => {
    console.log("in here get winners")
    const resp = await fetch('http://localhost:3000/winner_get_data')
    let temp = await resp.json()
    current_winner = temp.pop()
    temp.sort((a,b) => Number(b.score) - Number(a.score))
    temp = temp.slice(0,10)
    return temp
}

const addWinner = async (e) => {
    const name1 = document.getElementById('name1').value
    const name2 = document.getElementById('name2').value 
    const score = 42 - state.turn

    const info = JSON.stringify(
        {
            name1: name1,
            name2: name2,
            winner: state.winner,
            score: Number(score)
        }
    )

    await fetch('http://localhost:3000/winner_data', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: info
    })

    //let json = await getWinners()
    //let current_winner = json.pop()
    if (state.winner==='red'){
        turn_win_sound.play()
        alert(`${name1} (red) wins in ${state.turn} turns!`)
    } else if (state.winner==='yellow'){
        turn_win_sound.play()
        alert(`${name2} (yellow) wins in ${state.turn} turns!`)
    } else {
        alert(`Draw!`)
    }

    /*json.sort((a,b) => Number(a.score) - Number(b.score))
    json = json.slice(0,10)
    console.log(json)*/

    document.getElementById('winnerlist').innerHTML = 'Top 10 best players ever!'
    getWinners().then(
        json => json.forEach(info => {
            const listElement = document.createElement('li')
            //determine winner name
            if (info.winner==='red'){
                listElement.innerHTML = `Name: ${info.name1} (red), Score: ${info.score}`
                document.getElementById('winnerlist').appendChild(listElement)
            } else if (info.winner==='yellow'){
                listElement.innerHTML = `Name: ${info.name2} (yellow), Score: ${info.score}`
                document.getElementById('winnerlist').appendChild(listElement)
            } /*else {
                listElement.innerHTML = `No winner for this game`
                document.getElementById('winnerlist').appendChild(listElement)
            }*/
        }
        ))

}