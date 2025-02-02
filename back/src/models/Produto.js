const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Produto = sequelize.define('Produto', {
    quantidade_estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_de_publicação: {
        type: DataTypes.DATE,
        allowNull: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descrição: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preço_unitário: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    título: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
Produto.associate = function(models) {
    Produto.belongsTo(models.Usuario)
    Produto.belongsTo(models.Carrinho)
    Produto.belongsTo(models.Favorito)
    Produto.hasMany(models.Comentario)
}
module.exports = Produto;