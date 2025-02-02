const { response } = require('express');
const Favorito = require('../models/Favorito');

const create = async(req,res) => {
    try{
          const favorito = await Favorito.create(req.body);
          return res.status(201).json({message: "Favorito cadastrado com sucesso!", favorito: favorito});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try {
        const favoritos = await Favorito.findAll();
        return res.status(200).json({favoritos});
    }catch(err){
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const favorito = await Favorito.findByPk(id);
        return res.status(200).json({favorito});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Favorito.update(req.body, {where: {id: id}});
        if(updated) {
            const favorito = await Favorito.findByPk(id);
            return res.status(200).send(favorito);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Favorito não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Favorito.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Favorito deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Favorito não encontrado.");
    }
};

const addRelationship = async(req,res) => {
    const {id} = req.params;
    try {
        const instanceFavorito = await Favorito.findByPk(id);
        const instanceUsuario = await Usuario.findByPk(req.body.other_id);
        const instanceProduto = await Produto.findByPk(req.body.other_id);
        await instanceFavorito.setProduto(instanceProduto);
        await instanceFaovrito.setUsuario(instanceUsuario);
        return res.status(200).json(Favorito.findByPk(id));
    }catch(err){
        return res.status(500).json({err});
    }
}

const removeRelationship = async(req,res) => {
    const {id} = req.params;
    try {
        const favorito = await Favorito.findByPk(id);
        await favorito.setUsuario(null);
        await favorito.setProduto(null);
        return res.status(200).json(favorito);
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
