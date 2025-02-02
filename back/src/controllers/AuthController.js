const Auth = require('../config/auth');
const User = require('../models/Usuario');
const UserController = require("./UsuarioController");
const path = require("path");
const mailer = require("../config/mail").mailer;
const handlebars = require("handlebars");
const readHTML = require("../config/mail").readHTML;
const { validationResult } = require('express-validator');


const register = async (req, res) => {

    try {
        const generateHash = Auth.generateHash(req.body.password);
        const salt = generateHash.salt;
        const hash = generateHash.hash;
        
        const newUserData = {
            email: req.body.email,
            nome: req.body.nome,
            data_de_nascimento: req.body.data_de_nascimento,
            salt: salt,
            hash: hash,
            endereço: req.body.endereço,
            telefone: req.body.telefone,
            cpf: req.body.cpf,
            nome_de_usuário: req.body.nome_de_usuário
        }
        validationResult(req).throw();
        const usuario = await User.create(newUserData);
        const pathTemplate = path.resolve(__dirname, "..", "..", "templates");

        readHTML(path.join(pathTemplate, "main.html"), (err, html) => {

            const template = handlebars.compile(html);

            const replacements = {

                name: usuario.nome

            };

            const htmlToSend = template(replacements);

            const message = {

                from: "nodemailer.reuse@gmail.com",
                to: usuario.email,
                subject: "Bem vindo(a) à comunidade Reus-e",
                html: htmlToSend,

            };

            mailer.sendMail(message);

        });
        return res.status(201).json({ usuario });
    } catch (err) {
        return res.status(500).json({ error: err + '!' });
    }
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user)
            return res.status(404).json({ message: "Usuario não encontrado." });
        const { password }= req.body;
        if (Auth.checkPassword(password, user.hash, user.salt)) {
            const token = Auth.generateJWT(user);
            return res.status(200).json({ token: token });
        } else {
            return res.status(401).json({ message: "Senha invalida" });
        }
    } catch (e) {
        return res.status(500).json({ err: e })
    }
}


const getDetails = (req, res) => {
    const token = Auth.getToken(req);
    const loggedUser = Auth.user(token);
    return res.status(201).json({ user: loggedUser });
};

module.exports = {
    register,
    login,
    getDetails
}