function mostrarInfoPessoa(pessoa) {
    console.log(`Seu nome é ${pessoa.nome}, tem ${pessoa.age}, atualmente voce esta ${pessoa.solteiro? "solteiro" : "namorando"}, 
e seus hobbies são ${pessoa.hobbies[0]}, ${pessoa.hobbies[1]} e ${pessoa.hobbies[2]}. Você mora na rua ${pessoa.endereco.rua}, na cidade
${pessoa.endereco.cidade} do estado ${pessoa.endereco.estado}`)
}

function mostrarListaPessoas(listaPessoa) {
    listaPessoa.forEach((pessoa) => {
        console.log(`${pessoa.nome} ${pessoa.idade} ${pessoa.cidade}`)
    })
}

const pessoa = {
    nome: "Joca",
    age: 22,
    solteiro: false,
    hobbies: ["games", 'volei', 'academia']
}

pessoa.endereco = {
    rua: "magnolia",
    cidade: "joaseiro",
    estado: "pe"
}


mostrarInfoPessoa(pessoa);

const pessoas = [{nome: "mars", idade: 22, cidade: "recife"}, {nome: "tony", idade: 21, cidade: "recife"}, 
{nome: "pepo", idade: 21.5, cidade: "recife"}]

mostrarListaPessoas(pessoas);


