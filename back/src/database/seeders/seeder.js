require('../../config/dotenv')();
require('../../config/sequelize');

const seedUsuario = require('./UsuarioSeeder');
const seedProduto = require('./ProdutoSeeder');
const seedFavorito = require('./FavoritoSeeder');
const seedComentario = require('./ComentarioSeeder');
const seedCarrinho = require('./CarrinhoSeeder');

(async () => {
  try {
    await seedUsuario();
    await seedProduto();
    await seedFavorito();
    await seedComentario();
    await seedCarrinho();

  } catch(err) { console.log(err) }
})();
