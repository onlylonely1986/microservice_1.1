const express = require('express')
const path = require('path')

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, '../html/index.html')
app.use(express.static(DIST_DIR))
app.get('/hej', (req, res) => res.send('Hello World! This is a deployed app now, or is it?'))
app.get('/api', (req, res) => res.send('This is your first deployed api'))
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
