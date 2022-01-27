const express = require('express');
const forapi = express();
forapi.use(express.json());
var cors = require('cors');
forapi.use(cors())

//const winner_data = []

const fs = require('fs').promises
let name1
let name2
let winner
let score
let total_data = []
let final = []

async function loadData(){
    const contents = await fs.readFile('./data.json', 'utf-8')
    total_data = JSON.parse(contents)
}

async function saveData(total_data){
    const contents = JSON.stringify(total_data)
    await fs.writeFile('./data.json', contents);
}

forapi.get('/winner_get_data', (req, res) => {
    res.json(total_data)
})

forapi.post('/winner_data', (req, res) => {
    total_data.push(req.body)
    console.log(req.body)
    saveData(total_data)
    res.status(200)
    saveData(total_data)
    res.send('ok')
})


forapi.listen(3000, async function() {
    console.log('im reading')
    await loadData()
    console.log(total_data)
})