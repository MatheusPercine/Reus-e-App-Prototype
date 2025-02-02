const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Favorito = sequelize.define('Favorito', {
    quantidade_produtos: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
Favorito.associate = function(models) {
    Favorito.belongsTo(models.Usuario)
    Favorito.hasMany(models.Produto)
}

module.exports = Favorito;