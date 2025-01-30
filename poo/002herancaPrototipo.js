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
const admin = {
    nome: "Joca",
    email: "jokjj.com",
    nascimento: "2024-01-01",
    role: "admin",
    ativo: true, 
    criarCurso: function() {
        console.log("Curso criado");
    }
}
//Define que o objeto 1 utilizara como prototipo o objeto 2
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();