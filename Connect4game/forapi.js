const express = require('express');
const forapi = express();
forapi.use(express.json());
var cors = require('cors');
forapi.use(cors())

const winner_data = []

/*const fs = require('fs').promises
let name1
let name2
let winner
let score
let total_data = []
let final = []

async function loadData(){
    const contents = await fs.readFile('./data.json', 'utf-8')
    const winner_data = JSON.parse(contents)
    for (let i=0; i<winner_data.length; i++){
        let game_info = []
        name1 = winner_data.name1
        name2 = winner_data.name2
        winner = winner_data.winner
        score = winner_data.score
        game_info.push(name1,name2,winner,score)
        total_data.push(game_info)
    }
}

async function saveData(total_data){
    for (let i=0; i<total_data.length; i++){
        final.push(
        {
            name1: total_data.name1,
            name2: total_data.name2,
            winner: total_data.winner,
            score: total_data.score
        })
    }
    const contents = JSON.stringify(final)
    await fs.appendFile('./data.json', contents);
}

loadData()

forapi.get('/winner_data', (req, res) => {
    res.json(winner_data)
})

forapi.post('/winner_data', (req, res) => {
    winner_data.push(req.body)
    console.log(req)
    res.status(200)
    //res.send('Done')
    //res.send({winner_data:winner_data})
    //saveData(winner_data)
    res.send(final)
    saveData(total_data)
})*/


forapi.get('/winner_data', (req, res) => {
    res.json(winner_data)
})

forapi.post('/winner_data', (req, res) => {
    winner_data.push(req.body)
    console.log(req)
    res.status(200)
    res.send('Done')
})


forapi.listen(3000)