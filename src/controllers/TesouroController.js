const tesouro =  require('../models/Tesouro');
const TOKEN = "123456"

const TesouroController = {
  home: async (req, res, next) => {
        return res.status(200).json({info: "API Tesouro Direto Adm - Million - protegido com token"})
  },    
  
  index: async (req, res, next) => {
    if(req.headers.token === TOKEN){
      try{
      const tesouro =  await Tesouro.find({})
      return res.status(200).send(tesouro)
      }
      catch(err){
        return res.status(401).send(err)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  },

  getById: async (req, res, next) => {
    if(req.headers.token === TOKEN){
      try {
        const tesouro =  await Tesouro.findById(req.params.user_id)
        return res.status(200).send(tesouro)
      } catch (error) {
        res.status(401).send(err)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  },
  
  create: async (req, res, next) => {
    if(req.headers.token === TOKEN){
      const {nome, ir, pais, preoupos, vencimento} = req.body
      try {
        const tesouro =  await Tesouro.create({ nome, ir, pais, preoupos, vencimento});
        return res.status(201).send(tesouro)
      } catch (error) {
        return res.status(401).send(error)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  },

  change: async(req, res, next) => {
    if(req.headers.token === TOKEN){
      try{
        await Tesouro.findOneAndUpdate({_id: req.params.tesouro_id}, { nome: req.body.nome, ir: req.body.ir, pais: req.body.pais, preoupos: req.body.preoupos, vencimento: req.body.vencimento})
        return res.status(204).send(`Alterado com o id ${req.params.tesouro_id}`)
      }
      catch(err){
        console.log(err)
        return res.status(401).send(`Erro: ${err}`)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  },

  delete: async(req, res, next) => {
    if(req.headers.token === TOKEN){
      try{
        await Tesouro.findByIdAndDelete(req.params.tesouro_id)
        return res.status(204).send({});
      }
      catch(err){
       return res.status(401).send(err)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  }
}

module.exports = TesouroController;