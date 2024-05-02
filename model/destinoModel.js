const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const DestinoSchema = new Schema(
  {
    nome:
    {
      type: String
    },
    
    LocalNome:  {type: String}, 
    Latitude:   { type: Number } , 
    Longitude:  { type: Number }  
  });

  module.exports = mongoose.model('Destino', DestinoSchema);