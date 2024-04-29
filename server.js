
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var http = require('http').createServer(app)

const path = require('path');

const config = require('./config.json')
const cors = require('cors')
const PORT = config.port
app.use(cors())

// Connectar à base de dados
mongoose.connect("mongodb+srv://joaoabreu221:joaoabreu@dbw.toqlem4.mongodb.net/").then( () => console.log("DB Connectada")).catch(console.error);

// Mudar o site
app.use('/assets/imagens/', express.static(path.join(__dirname+'/assets/imagens/')))

http.listen(PORT, () =>{
    console.log(`Listening in port ${PORT}`)
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/view/index.html'));
});

app.get('/index2.html', (req, res) => {
  res.sendFile(path.join(__dirname+'/view/index2.html'));
});

// CRUD
// Destinos
const Destino = require("./models/destinoModel")
app.get('/Destinos', async (req, res) => {
  let destinos = await Destino.find();

  res.json(destinos);
});
app.get('/Destinos/new', (req, res) => {
  let destino = new Destino ({nome: req.body.nome})

  res.json(destino);
});

app.delete('/Destinos/new/:id', async (req, res) => {
  const result = await Destino.findByIdAndDelete(req.params.id  );
  res.json(result);
});
