const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Comentario = sequelize.define('Comentario', {
    data_publicação: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    avaliação: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    conteudo: {
        type: DataTypes.STRING,
    }
});
Comentario.associate = function(models) {
    Comentario.belongsTo(models.Usuario)
    Comentario.belongsTo(models.Produto)
}
module.exports = Comentario;