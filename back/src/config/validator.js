const { body } = require("express-validator");

const validationUsuario = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('email').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isEmail().withMessage('Precisa ser exemplo@exemplo'),
                body('nome').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
                body('data_de_nascimento').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage('Por favor, preencha o campo').isDate().withMessage('Like this: YYYY/MM/DD').isBefore('04-01-2004'),
                body('endereço').exists().withMessage("This field mustn't be null").isLength({min: 1}).withMessage('Por favor preenche o campo'),
                body('telefone').exists().withMessage("This Field mustn't be null").isLength({min: 9, max: 11}).withMessage('Por favor preenche o campo'),
                body('cpf').exists().withMessage("This Field mustn't be null").isLength({min: 11, max: 11}).withMessage('Por favor preenche o campo'),
                body('nome_de_usuário').exists().withMessage("This Field mustn't be null").isLength({min: 1}).withMessage('Por favor, preencha o campo'),
            ]
        }
    }
}

module.exports = {
    validationUsuario
}