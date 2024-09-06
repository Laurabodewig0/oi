const express = require("express");
const app = express();
let livros = require("./livros.js");
const fs = require("fs");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

function criarLivro(req, res) {
  const novoLivro = {
    id: livros.length + 1,
    titulo: req.body.titulo,
    autor: req.body.autor,
    ano: req.body.ano,
    genero: req.body.genero,
  };

  livros.push(novoLivro);

  res.status(201).send({
    message: "Livro criado com sucesso!",
    livro: novoLivro,
  });
}

app.post("/livro", criarLivro);

app.get('/livros', (req, res) => {
  res.json(livros);
});

function atualizarLivro(req, res) {
  const { id } = req.params;
  const novoTitulo = req.body.titulo;

  const livro = livros.find((l) => l.id == id);

  if (!livro) {
    return res.status(404).send({ message: 'Livro não encontrado' });
  }

  livro.titulo = novoTitulo;
  res.status(200).send({
    message: 'Livro atualizado com sucesso!',
    livro: livro
  });
}

app.put('/livros/:id', atualizarLivro);

function deletarLivro(req, res) {
  const { id } = req.params;
  const index = livros.findIndex((l) => l.id == id);

  if (index === -1) {
    return res.status(404).send('Livro não encontrado!');
  }

  const livroDeletado = livros.splice(index, 1)[0];

  res.status(200).send({
    message: 'Livro deletado com sucesso!',
    livro: livroDeletado
  });
}

app.delete('/livros/:id', deletarLivro);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
