const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => res.send('Welcome to my blog!'));

app.listen(port, () => console.log(`Listen example at http://localhost:${port}`))