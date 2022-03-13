const express = require('express')
const app = express()
const port = 3000
// undefined
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
    res.send(process.env.SERVEICE__NONSENSITIVE_DATA + '\n' + process.env.SERVICE__SENSITIVE_DATA + '\n')
  })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})