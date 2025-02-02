const { response } = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');
const Auth = require('../config/auth');
const path = require("path");
const fsPromises = require("fs").promises;
const mailer = require("../config/mail").mailer;
const handlebars = require("handlebars");
const readHTML = require("../config/mail").readHTML;

const create = async (req, res) => {
    try {
        validationResult(req).throw();
        const usuario = await Usuario.create();
        return res.status(201).json({ message: "Usuário cadastrado com sucesso!", usuario: usuario });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const index = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        return res.status(200).json({ usuarios });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

const show = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        return res.status(200).json({ usuario });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Usuario.update(req.body, { where: { id: id } });
        if (updated) {
            const usuario = await Usuario.findByPk(id);
            return res.status(200).send(usuario);
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json("Usuário não encontrado");
    }
};

const destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Usuario.destroy({ where: { id: id } });
        if (deleted) {
            return res.status(200).json("Usuário deletado com sucesso.");
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json("Usuário não encontrado.");
    }
};

const addRelationship = async (req, res) => {
    const { id } = req.params;
    try {
        const instanceUsuario = await Usuario.findByPk(id);
        const instanceProduto = await Produto.findByPk(req.body.other_id);
        const instanceCarrinho = await Carrinho.findByPk(req.body.other_id);
        const instanceFavorito = await Favorito.findByPk(req.body.other_id);
        const instanceComentario = await Comentario.findByPk(req.body.other_id);
        await instanceUsuario.setProduto(instanceProduto);
        await instanceUsuario.setCarrinho(instanceCarrinho);
        await instanceUsuario.setFavorito(instanceFavorito);
        await instanceUsuario.setComentario(instanceComentario);
        return res.status(200).json(Usuario.findByPk(id));
    } catch (err) {
        return res.status(500).json({ err });
    }
};

const removeRelationship = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        await usuario.setProduto(null);
        await usuario.setCarrinho(null);
        await usuario.setFavorito(null);
        await usuario.setComentario(null);
        return res.status(200).json(usuario);
    } catch (err) {
        return res.status(500).json({ err });
    }
}

const addUserPic = async (request, response) => {
    const { id } = request.params;
    const path = process.env.APP_URL + "/uploads/" + request.file.filename;
    try {
        const updated = await Usuario.update({ path: path }, { where: { id: id } });
        if (updated) {
            const usuario = await Usuario.findByPk(id);
            return response.status(200).send(usuario);
        };
        throw new Error();
    } catch (err) {
        return response.status(500).json("Usuário não encontrado.")
    }
};

const removeUserPic = async (request, response) => {
    try {
        const { id } = request.params;
        const usuario = await Usuario.findByPk(id);
        const photo = usuario.path;
        const pathDb = photo.split("/").slice(-1)[0];
        await fsPromises.unlink(path.join(__dirname, "..", "..", "uploads", pathDb));
        await Usuario.update({ path: null }, { where: { id: id } });
        const usuarioNew = await Usuario.findByPk(id);
        return response.status(200).send(usuarioNew);
    } catch (error) {
        return response.status(500).json("Usuário não encontrado.")
    };
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    addRelationship,
    removeRelationship,
    addUserPic,
    removeUserPic
};
