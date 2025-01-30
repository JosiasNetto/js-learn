import User from "./004User.js"

//Classe Docente herda as caracteristicas de User
export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo);//Chama o construtor da superclasse de Admin(User)
    }

    aprovarEstudante(estudante, curso){
        return `Estudante ${estudante} passou no curso de ${curso}, responsavel ${this.nome}`;
    }
}

//const novaDocente = new Docente("Ana", "A@a.com", "2024/12/12")
//console.log(novaDocente.aprovarEstudante("Beta", "Javascript"));