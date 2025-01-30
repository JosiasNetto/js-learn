export default class User {
    //Utilizando o # no inicio do nome da propriedade, a declaramos como privada
    #nome //Necessario chama no inicio da classe
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante"
        this.#ativo = ativo;
    }
    get nome() {//Permite que a propriedade seja acessada apenas para leitura, mesmo que fora da classe
        return this.#nome;
    }
    get email() {
        return this.#email;
    }
    get nascimento() {
        return this.#nascimento;
    }
    get role() {
        return this.#role;
    }
    set nome(novoNome) {//Sempre recomendado utilizar set/get, pois assim eh possivel realizar
        //verificacoes antes de modificar/acessar algo ja existente. Como ver se alguem tem permissao para mudar o nome
        if(novoNome === ""){
            throw new Error("Formato do nome não é valido")
        }
        this.#nome = novoNome;
    }
    //Metodo privado
    #montaObjUser() {
        return ({
            nome: this.#nome,
            email : this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }
    exibirInfos() { //Em js não é possivel fazer sobrecarga de metodo na mesma classe que foi criado(Tirando quando cria um static)
        if(this.role === "estudante"){
            return `Dados estudante: ${this.nome} ${this.email}`;
        }
        if(this.role === "admin"){
            return `Dados Admin: ${this.nome} ${this.email} ${this.role}`;
        }
        if(this.role === "docente"){
            return `Dados docente: ${this.nome} ${this.email}`;
        }
    }
    //Método de classe
    static exibirInfos(nome, email) {//Metodo que não necessita de uma instacia/construtor para ser chamado
        return `${nome}, ${email}`;
    }
}

//const novoUser = new User("Pepo", "p@p.com", "2003/05/07")
//console.log(novoUser);
//console.log(novoUser.exibirInfos());

//console.log(User.prototype.isPrototypeOf(novoUser));