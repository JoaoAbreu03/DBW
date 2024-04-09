
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var http = require('http').createServer(app)

const path = require('path');

const config = require('./config.json')
const cors = require('cors')
const PORT = config.port
app.use(cors())

mongoose.connect("mongodb+srv://joaoabreu221:joaoabreu@dbw.toqlem4.mongodb.net/").then( () => console.log("DB Connectada")).catch(console.error);

const uri = "mongodb+srv://joaoabreu221:joaoabreu221@dbw.toqlem4.mongodb.net/?retryWrites=true&w=majority&appName=DBW";
// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
// function run() {
//   console.log("teste");
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     console.log("teste1");

//      mongoose.connect(uri, {
//       sslValidate: false,
//       ssl: true,
//       sslCert: certFileBuf,
//       sslKey: certFileBuf,
//       checkServerIdentity: false,
//       sslPass: 'mysslPass',
//   });
//     console.log("teste11");

//     mongoose.connection.db.admin().command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } 
//   catch(error){
//     console.error;
//   } finally {
//     // Ensures that the client will close when you finish/error
//     mongoose.disconnect();
//   }
  
// }

//run();

http.listen(PORT, () =>{
    console.log(`Listening in port ${PORT}`)
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/view/index.html'));
});

app.get('/index2.html', (req, res) => {
  res.sendFile(path.join(__dirname+'/view/index2.html'));
});
