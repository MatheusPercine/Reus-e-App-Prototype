const Produto = require("../../models/Produto");
const faker = require('faker-br');

const seedProduto = async function () {

    const produtos = [];
  
    for (let i = 0; i < 10; i++) {
      produtos.push({
        quantidade_estoque: faker.random.number(),
        data_de_publicação: faker.date.past(),
        descrição: faker.lorem.text(),
        preço_unitário: faker.random.float({ precision: 0.01 }),
        título: faker.name.firstName(),
        categoria: faker.name.firstName()
      });
    }
  
    try {
      await Produto.sync({ force: true });
      await Produto.bulkCreate(produtos);
  
    } catch (err) { console.log(err); }
  }
  
  module.exports = seedProduto;