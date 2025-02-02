const Usuario = require("../../models/Usuario");
const relationship = require("../../controllers/UsuarioController")
const faker = require('faker-br');

const seedUsuario = async function () {

    const usuarios = [];
  
    for (let i = 0; i < 10; i++) {
      usuarios.push({
        email: faker.internet.email(),
        nome: faker.name.firstName(),
        data_de_nascimento: faker.date.past(10),
        endereço: faker.address.city(),
        telefone: faker.phone.phoneNumber(),
        cpf: faker.br.cpf(),
        avaliação: faker.random.float({ max: 5, precision: 0.1 }),
        nome_de_usuário: faker.name.firstName(),
        número_de_vendas: faker.random.number()
      });
    }
    
    try {
      await Usuario.sync({ force: true });
      await Usuario.bulkCreate(usuarios);
  
    } catch (err) { console.log(err); }
  }
  
  module.exports = seedUsuario;