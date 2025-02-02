const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Usuario = sequelize.define('Usuario', {
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_de_nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endereço: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    telefone: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    avaliação: {
        type: DataTypes.FLOAT,
    },
    nome_de_usuário: {
        type: DataTypes.STRING,
        allowNull: false
    },
    número_de_vendas: {
        type: DataTypes.INTEGER
    },
    path: {
        type: DataTypes.STRING
    },
    is_admin: {

        type: DataTypes.BOOLEAN
    
    },
    salt: {
        type: DataTypes.STRING
    },

    hash: {
        type: DataTypes.STRING
    }
});
Usuario.associate = function(models) {
    Usuario.hasMany(models.Produto)
    Usuario.hasOne(models.Carrinho)
    Usuario.hasOne(models.Favorito)
    Usuario.hasMany(models.Comentario)
    Usuario.hasMany(models.Compra)
}

module.exports = Usuario;