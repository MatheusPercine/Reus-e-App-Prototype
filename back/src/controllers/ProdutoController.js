const { response } = require('express');
const Produto = require('../models/Produto');

const create = async(req,res) => {
    try{
          const produto = await Produto.create(req.body);
          return res.status(201).json({message: "Produto cadastrado com sucesso!", produto: produto});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try {
        const produtos = await Produto.findAll();
        return res.status(200).json({produtos});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const produto = await Produto.findByPk(id);
        return res.status(200).json({produto});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Produto.update(req.body, {where: {id: id}});
        if(updated) {
            const produto = await Produto.findByPk(id);
            return res.status(200).send(produto);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Produto não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Produto.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Produto deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Produto não encontrado.");
    }
};

const addRelationship = async(req,res) => {
    const {id} = req.params;
    try {
        const instanceProduto = await Produto.findByPk(id);
        const instanceUsuario = await Usuario.findByPk(req.body.other_id);
        const instanceCarrinho = await Carrinho.findByPk(req.body.other_id);
        const instanceFavorito = await Favorito.findByPk(req.body.other_id);
        const instanceComentario = await Comentario.findByPk(req.body.other_id);
        await instanceProduto.setUsuario(instanceUsuario);
        await instanceProduto.setCarrinho(instanceCarrinho);
        await instanceProduto.setFavorito(instanceFavorito);
        await instanceProduto.setComentario(instanceComentario);
        return res.status(200).json(Produto.findByPk(id));
    }catch(err){
        return res.status(500).json({err});
    }
};

const removeRelationship = async(req,res) => {
    const {id} = req.params;
    try {
        const produto = await Produto.findByPk(id);
        await produto.setUsuario(null);
        await produto.setCarrinho(null);
        await produto.setFavorito(null);
        await produto.setComentario(null);
        return res.status(200).json(produto);
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
