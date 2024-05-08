
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var http = require('http').createServer(app)


const config = require('./config.json')
const PORT = config.port

const cors = require('cors')

app.use(cors())
app.use(express.json()) //poder capturar body nas requisicoes post, update e delete
const path = require('path');

// Connectar à base de dados
//mongoose.connect("mongodb+srv://joaoabreu221:joaoabreu@dbw.toqlem4.mongodb.net/").then( () => console.log("DB Connectada")).catch(console.error);
mongoose.connect("mongodb+srv://joaoabreu221:joaoabreu@dbw.toqlem4.mongodb.net/?retryWrites=true&w=majority&appName=DBW").then( () => console.log("DB Connectada")).catch(console.error);

// app.use('/assets/imagens/', express.static(path.join(__dirname+'/assets/imagens/'))) // buscar as img guardadas

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
const Destino = require("./model/destinoModel")
app.get('/Destinos', async (req, res) => {
  let destinos = await Destino.find();

  res.json(destinos);

});

app.post('/Destinos/new', (req, res) => {

  let destinos = new Destino ({nome: req.body.nome })
  destinos.save();
  
  res.json(destinos);
});

app.put('/updateDestino/:id', async (req, res) => {//atualizar utilizador
  const body = req.body   //json com dados para inserir na base de dados
  const dest = await Destino.findById( req.params.id  );
  
  dest = new Destino ({nome: req.body.nome }) ;

  dest.save();

  res.json(dest);  

});

app.delete('/deleteDestinos/:id', async (req, res) => {
  const result = await Destino.findByIdAndDelete( req.params.id  );
  res.json(result);
});




// CRUD
// user
const User = require("./model/userModel")
app.get('/users', async (req, res) => {
  let users = await User.find();

  res.json(users);
});

app.post('/users/new', (req, res) => {

  let users = new UserDB ({nome: req.body.nome })
  users.save();
  
  res.json(users);
});

app.post('/updateuser/:id', async (req, res) => {//atualizar utilizador
  const body = req.body//json com dados para inserir na base de dados
  
})

app.delete('/deleteusers/:id', async (req, res) => {
  const result = await User.findByIdAndDelete( req.params.id  );
  res.json(result);
});



// CRUD
// Contact Us
const contactUs = require("./model/contactusModel")
app.get('/contactUs', async (req, res) => {
  let contact = await contactUs.UserD();

  res.json(contact);
});

app.post('/contactUs/new', (req, res) => {

  let contact = new ContactUs ({nome: req.body.nome })
  contact.save();
  
  res.json(contact);
});

app.post('/updatecontactUs/:id', async (req, res) => {//atualizar utilizador
  const body = req.body//json com dados para inserir na base de dados
  
});

app.delete('/deletecontactUs/:id', async (req, res) => {
  const result = await UserD.findByIdAndDelete( req.params.id  );
  
  res.json(result);
});
