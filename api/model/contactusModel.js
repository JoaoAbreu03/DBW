const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const contactSchema = new Schema(
  {
    user:
    {
      type: String,
    },
    mensagem:
    {
      type: String,
    }
  });

  module.exports = mongoose.model('ContactUs', contactSchema);