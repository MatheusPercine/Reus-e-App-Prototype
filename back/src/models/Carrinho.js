const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Carrinho = sequelize.define('Carrinho', {
    valor_total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantidade_produtos: {
        type: DataTypes.INTEGER,
    }
});
Carrinho.associate = function(models) {
    Carrinho.belongsTo(models.Usuario)
    Carrinho.hasMany(models.Produto)
}
module.exports = Carrinho;