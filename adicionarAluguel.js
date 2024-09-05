const aluguel = require('./aluguel');

function adicionarAluguel(req, res) {
console.log(req.body);
const novoAluguel = {
    id:aluguel.lenght + 1,
    nome: req.body.titulo
};
aluguel.push(novoAluguel)
res.status(201)
res.send({message: 'Aluguel criado com sucesso!', aluguel: novoAluguel});
}

module.exports = adicionarAluguel;