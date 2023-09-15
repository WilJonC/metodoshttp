const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("HOLA MUNDO, SOY WILLIAM, GET!")
})

app.post('/', (req, res) => {
    res.send("HOLA MUNDO, SOY WILLIAM, POST!")
})

app.put('/', (req, res) => {
    res.send("HOLA MUNDO, SOY WILLIAM, PUT!")
})

app.patch('/', (req, res) => {
    res.send("HOLA MUNDO, SOY WILLIAM, PATCH!")
})

app.delete('/', (req, res) => {
    res.send("HOLA MUNDO, SOY WILLIAM, DELETE!")
})


/*
*
*FUNCIONALIDAD
/
*/

// http://localhost:3001
app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
}) 