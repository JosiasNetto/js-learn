import User from "./004User.js"

//Classe Admin herda as caracteristicas de User
export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo);//Chama o construtor da superclasse de Admin(User)
    }
    //Polimorfismo
    exibirInfos(){//Sobrecarrega o que o metodo faz na classe herdada
        const infos = super.exibirInfos();//Chama a funcao da classe pai
        return `admin - ${infos}`;
    }
    criarCurso(nomeCurso, qtdVagas){
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas.`
    }
}
// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2005/01/01");
// console.log(novoAdmin); //Nao mostra nada pois suas propriedades sao privadas
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso("JavaScript", 23));