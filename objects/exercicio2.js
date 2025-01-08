const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

function encontrarLivroPorId(lista, id){
    return lista.find((livro) => livro.id === id);
}

console.log(encontrarLivroPorId(biblioteca, 3));

//-------------------------------------------------------------------------------------------------
const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function filtrarOrdenarPorPreco(lista, maxPrice, crescente=true){
    const listaFiltrada = lista.filter((produto) => produto.preco <= maxPrice);

    const listaOrdenada = listaFiltrada.sort((a, b) => {
        if(a.preco > b.preco){
            return crescente? 1 : -1;
        }
        if(a.preco < b.preco){
            return crescente? -1 : 1;
        }
        return 0;
    })
    return listaOrdenada;
}

console.log(filtrarOrdenarPorPreco(listaProdutos, 50));

//-----------------------------------------------------------------------------------------------
const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

function encontrarFuncionarioPorId(lista, id){
    const departamento = lista.find((departamento) => {
        return departamento.funcionarios.find((funcionario) => {
            return funcionario.id === id;
        })
    })
    if(departamento !== undefined){
        return departamento.funcionarios.find((func) => func.id === id);
    }
}

console.log(encontrarFuncionarioPorId(departamentos, 202));