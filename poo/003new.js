//Forma utilizada antes da declaração de classes

//Função construtora
function User (nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`;
    }
}

//New: Cria uma instancia para a função construtora
const novoUser = new User("Roberta", "R<3J@.com");
console.log(novoUser.exibirInfos());