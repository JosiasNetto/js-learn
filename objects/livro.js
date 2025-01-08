const livro = {
    titulo: "Diario de um banana",
    autor: "Joca",
    anoPublicacao: 2003,
    genero: "Terror",
    avaliacao: null
}

const anoAtual = new Date().getFullYear();

const idadePublicacao = anoAtual - livro.anoPublicacao;

livro.idadePublicacao = idadePublicacao;

console.log(livro)

livro.avaliacao = 10;

console.log(livro)

const detalhesLivros = `O livro chamado ${livro.titulo} do autor ${livro.autor}, lançado no ano ${livro.anoPublicacao} do genero ${livro.genero} tem avaliação ${livro.avaliacao}`

console.log(detalhesLivros)