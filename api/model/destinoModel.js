const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const DestinoSchema = new Schema(
  {
    titulo:
    {
      type: String
    },
    descricao:
    {
      type: String
    },
    
    path:
    {
      type: String 
    },
    
    estrela1:{
      type: Number
    },
    estrela2:{
      type: Number
    },
    estrela3:{
      type: Number
    },
    estrela4:{
      type: Number
    },
    estrela5:{
      type: Number
    },
    LocalNome:  {type: String}, 
    Latitude:   { type: Number } , 
    Longitude:  { type: Number }  
  });

  module.exports = mongoose.model('Destino', DestinoSchema);