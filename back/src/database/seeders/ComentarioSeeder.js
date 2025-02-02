const Comentario = require("../../models/Comentario");
const faker = require('faker-br');

const seedComentario = async function () {

    const comentarios = [];
  
    for (let i = 0; i < 10; i++) {
      comentarios.push({
        data_publicação: faker.date.past(),
        avaliação: faker.random.float({ max: 5, precision: 0.1 }),
        conteudo: faker.lorem.text()
      });
    }
  
    try {
      await Comentario.sync({ force: true });
      await Comentario.bulkCreate(comentarios);
  
    } catch (err) { console.log(err); }
  }
  
  module.exports = seedComentario;