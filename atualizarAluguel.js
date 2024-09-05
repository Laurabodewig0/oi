const {aluguel} = require('./aluguel');

const atualizarAluguel = (req, res) => {
const {id} = req.params;
const novoAluguel = req.body.aluguel;

let index = aluguel.findIndex(alugado => alugado.id == id);

if (!aluguel) {
    return res.status(404).send({message: 'Nada foi atualizado'});
}

aluguel.titulo = novoAluguel;
res.status(200).send({
message:'Aluguel atualizado com sucesso',
aluguel: aluguel
});
}

module.exports = atualizarAluguel