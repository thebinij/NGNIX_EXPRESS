const express = require('express');
const os = require('os');

const app = express()

app.use('/', async (req, res) => {
    console.log(`I am sending a response ${os.hostname()}`)
    res.setHeader()
    res.json({ message: 'Ok it works...', hostname: os.hostname() })
})

app.listen(3000, () => console.log('Listening server on port 3000'))