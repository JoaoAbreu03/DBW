const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const contactSchema = new Schema(
  {
    User:
    {
      type: String,
      required: true
    },
    Mensagem:
    {
      type: String,
      required: true
    }
  });

  module.exports = mongoose.model('ContactUs', contactSchema);