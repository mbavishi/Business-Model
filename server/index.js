const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))

app.get('', (req, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/error.html`)
})

app.listen(4000, () => {
    console.log('listning to 4000');
})