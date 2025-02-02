const Carrinho = require("../../models/Carrinho");
const faker = require('faker-br');

const seedCarrinho = async function () {

    const carrinhos = [];
  
    for (let i = 0; i < 10; i++) {
      carrinhos.push({
        valor_total: faker.random.float({ precision: 0.01 }),
        quantidade_produtos: faker.random.number()
      });
    }
  
    try {
      await Carrinho.sync({ force: true });
      await Carrinho.bulkCreate(carrinhos);
  
    } catch (err) { console.log(err); }
  }
  
  module.exports = seedCarrinho;