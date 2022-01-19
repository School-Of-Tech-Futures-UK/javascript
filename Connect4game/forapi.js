const express = require('express');
const forapi = express();
forapi.use(express.json());
var cors = require('cors')
forapi.use(cors())

const winner_data = []

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