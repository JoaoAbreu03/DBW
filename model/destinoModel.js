const mongoose = require('mongoose');

const Schema = new mongoose.Schema;


const DestinoSchema = new Schema(
  {
    Nome:
    {
      type: String,
      required: true
    },
    
    LocalNome:  {type: String}, 
    Latitude: { type: Number } , 
    Longitude: { type: Number }  }
)

const destino = mongoose.model('Destino', DestinoSchema);

module.exports(destino);