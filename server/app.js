const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.post('/fruits', function(req, res) {
    // TODO add fruit to DB
    res.status(200)
    res.send('Ok')
})

app.listen(3000)