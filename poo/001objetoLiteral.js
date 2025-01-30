const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2024-01-01",
    role: "estudante",
    ativo: true,    
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const exibir = user.exibirInfos;
exibir() //Erro pois o metodo fica fora de contexto(Não sera chamado com o objeto)

const exibirNome = exibir.bind(user);//Prende o objeto a funcao
exibirNome();