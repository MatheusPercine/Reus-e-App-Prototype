const { response } = require('express');
const Carrinho = require('../models/Carrinho');

const create = async(req,res) => {
    try{
          const carrinho = await Carrinho.create(req.body);
          return res.status(201).json({message: "Carrinho cadastrado com sucesso!", carrinho: carrinho});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try {
        const carrinhos = await Carrinho.findAll();
        return res.status(200).json({carrinhos});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const carrinho = await Carrinho.findByPk(id);
        return res.status(200).json({carrinho});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Carrinho.update(req.body, {where: {id: id}});
        if(updated) {
            const carrinho = await Carrinho.findByPk(id);
            return res.status(200).send(carrinho);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Carrinho não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Carrinho.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Carrinho deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Carrinho não encontrado.");
    }
};


const addRelationship = async(req,res) => {
    const {id} = req.params;
    try {
        const instanceCarrinho = await Carrinho.findByPk(id);
        const instanceProduto = await Produto.findByPk(req.body.other_id);
        const instanceUsuario = await Usuario.findByPk(req.body.other_id);
        await instanceCarrinho.setUsuario(instanceUsuario);
        await instanceCarrinho.setProduto(instanceProduto);
        return res.status(200).json(Carrinho.findByPk(id));
    }catch(err){
        return res.status(500).json({err});
    }
}

const removeRelationship = async(req,res) => {
    const {id} = req.params;
    try {
        const carrinho = await Carrinho.findByPk(id);
        await carrinho.setProduto(null);
        await carrinho.setUsuario(null);
        return res.status(200).json(carrinho);
    }catch(err){
        return res.status(500).json({err});
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    addRelationship,
    removeRelationship
};
