const {aluguel} = require('./aluguel')

const removerAluguel = (req, res) => {
    const{id} = req.params;

    let index = aluguel.findIndex(alugado => alugado.id == id);

    if(index === -1) {
        return res.status(404).send('Nada encontrado');
    }

    const aluguelRemovido = aluguel.splice(index, 1)[0];
aluguel.forEach(aluguel, index => {
    if(aluguel.aluguelId == id){
        aluguel.splice(index , 1);
    }
});

res.status(200).send({
message:'aluguel deletado',
aluguel: aluguelRemovido
})
}


module.exports = removerAluguel