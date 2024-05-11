
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var http = require('http').createServer(app)


const config = require('./config.json')
const PORT = config.port

const cors = require('cors')

app.use(cors())
app.use(express.json()) //poder capturar body nas requisicoes post, update e delete
const multer = require('multer');
const path = require('path');


// Configura o multer para armazenar arquivos na pasta 'cliente/public'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../cliente/public/images');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});


const upload = multer({ storage });


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
app.get('/Destinos/:id', async (req, res) => {
  let destinos = await Destino.findById(req.params.id);


  res.json(destinos);
});


app.post('/Destinos/new', upload.single('file'), (req, res) => {
  console.log(req.file.destination+"/"+req.file.filename)
  let destinos = new Destino ({titulo: req.body.titulo, descricao: req.body.descricao,estrela1: 5, estrela2:8, estrela3:20, estrela4:10, estrela5:2 })
  
  destinos.path = req.file.destination+"/"+req.file.filename
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
app.get('/user', async (req, res) => {
  let users = await User.find();

  res.json(users);
});


// Rota para o upload da imagem
// app.post('/upload', upload.single('file'), (req, res) => {
//   console.log(req.body)
//   console.log(req.file)
//   res.send('Arquivo enviado com sucesso!');
// });


app.post('/users/new', upload.single('file'), (req, res) => {
  let users = new User ({email: req.body.email, password: req.body.password })

  if(!req.file)
    users.path = "../cliente/src/assets/imagens/user.png"
  else
    users.path = req.file.destination+"/"+req.file.filename

  console.log(req.body)
  users.save();
  
  res.json(users);
});


app.put('/updateUsers/:id', async (req, res) => {//atualizar utilizador
  const body = req.body   //json com dados para inserir na base de dados
  const dest = await Destino.findById( req.params.id  );
  
  dest = new Destino ({nome: req.body.nome }) ;

  dest.save();

  res.json(dest);  

});


app.post('/userLogIn', async (req, res) => {
  let users = await User.findOne({
    email: req.body.email,
    password: req.body.password
  })

  console.log(users);
  if(!users)
    return res.status(404).send({ message: "User Not found." });

  else
    res.json(users) 
});

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
