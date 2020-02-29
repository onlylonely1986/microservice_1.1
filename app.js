const express = require('express')
const app = express()
const port = 3000

console.log('test test')
app.get('/', (req, res) => res.send('Hello World! This is a deployed app now, or is it?'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
