const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.get('/fruits', function(req, res) {
    res.send({
        fruits: ['apple', 'banana', 'mango'],
        edible: true
    })
})

app.listen(3000)