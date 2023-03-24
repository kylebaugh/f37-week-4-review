// Require packages
const express = require('express')
const cors = require('cors')

// Create app instance
const app = express()

// Set up middleware
app.use(express.json())
app.use(cors())

// Endpoints

const {getDinos, addDino, deleteDino} = require('./controller')

app.get('/dinos', getDinos)
app.post('/dinos', addDino)
app.delete('/dinos/:id', deleteDino)


// Open door/port to server
app.listen(2319, console.log("2319! We've got a 2319!"))