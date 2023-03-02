const express = require('express');
const os = require('os');

const app = express()
const port = process.env.PORT || 3000;

app.use('/', async (req, res) => {
    console.log(`I am sending a response ${os.hostname()}`)

    res.json({ message: 'Ok it works...', hostname: os.hostname() })

})

app.listen(port, () => console.log(`Listening server on ${port}`))