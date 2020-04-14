// Tesouro:{
//     nome: "",
//     ir: boolean,
//     pais: "",
//     preoupos: boolean,
//     vencimento: Date,
//     }
// nome, ir, pais, preoupos, vencimento
const mongoose = require('../config/database'); 

const TesouroSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  ir: {
    type: Boolean,
    required: true,
  },
  pais: {
    type: String,
    required: true,
  },
  preoupos: {
    type: Boolean,
    default: Date.now,
  },    
  vencimento: {
    type: Date,
    default: Date.now,
  },  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Tesouro = mongoose.model('TesouroAdm', TesouroSchema);

module.exports = Tesouro;