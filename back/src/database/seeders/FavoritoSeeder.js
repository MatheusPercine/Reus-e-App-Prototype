const Favorito = require("../../models/Favorito");
const faker = require('faker-br');

const seedFavorito = async function () {

    const favoritos = [];
  
    for (let i = 0; i < 10; i++) {
      favoritos.push({
        quantidade_produtos: faker.random.number()
      });
    }
  
    try {
      await Favorito.sync({ force: true });
      await Favorito.bulkCreate(favoritos);
  
    } catch (err) { console.log(err); }
  }
  
  module.exports = seedFavorito;