const pessoa = {
    nome: "Tony",
    notas:[7, 9, 6],

    calcularMedia: function(){
        const somaNotas = this.notas.reduce((acc, nota) => {
            return acc + nota;
        }, 0)
        return somaNotas / this.notas.length;
    },

    classificarDesempenho: function(media) {
        let classicacao;
        if(media >= 9){
            classicacao = "Desempenho excelente";
        }
        else if(media > 7.5){
            classicacao = "Bom desempenho";
        }
        else if(media >= 6){
            classicacao = "Desempenho regular";
        }
        else{
            classicacao = "Desempenho insuficiente";
        }
        return classicacao;
    }
}

const media = pessoa.calcularMedia()
console.log(media);

const clasificacao = pessoa.classificarDesempenho(media);
console.log(clasificacao);
//-------------------------------------------------------------------------------------------
const carro = {
    marca: "honda",
    modelo: "civic",
    ano: "2010",
    cor: "preto"
}

for (let info in carro){
    console.log(`A chave ${info} tem valor ${carro[info]}`);
}