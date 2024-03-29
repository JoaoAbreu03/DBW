

const express = require('express');
const app = express();
var http = require('http').createServer(app)

const path = require('path');

const config = require('./config.json')
const cors = require('cors')
const PORT = config.port
app.use(cors())

http.listen(PORT, () =>{
    console.log(`Listening in port ${PORT}`)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/view/index.html'));
});

app.get('/index2.html', (req, res) => {
  res.sendFile(path.join(__dirname+'/view/index2.html'));
});

