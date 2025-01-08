const carro = {
    marca: "honda",
    modelo: "civic",
    ano: "2010",
    cor: "preto",
    ligado: false,

    ligar: function(){
        this.ligado = true;
    },

    desligar: function(){
        this.ligado = false;
    },

    obterDetalhes: function(){
        return `O carro é da marca ${this.marca}, modelo ${this.modelo}, do ano ${this.ano}, da cor ${this.cor} e esta ${this.ligado? "ligado" : "desligado"}`
    }
}

console.log(carro.obterDetalhes());

carro.ligar()
console.log(carro.obterDetalhes());

carro.desligar()
console.log(carro.obterDetalhes());

Object.defineProperty(carro, "placa", {
    value: "H213JK",
    enumerable: false
});

for (let info in carro){
    if(typeof carro[info] !== 'function'){
        console.log(`Chave ${info} de valor ${carro[info]}`);
    }
}

const chaves = Object.keys(carro);
console.log(chaves);

//Propriedade não enumerada(não se itera sobre)
console.log(carro.placa);

const carroNovo = {
    marca: "volks",
    modelo: "jetta",
    ano: "2011",
    cor: "cinza"
}

const carroComNovosDetalhes = {
    ...carro, ...carroNovo
}

console.log(carroComNovosDetalhes);