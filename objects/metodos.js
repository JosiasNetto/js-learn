const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'apto 43'
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
  }

  //Return array of keys from the object
  const chaves = Object.keys(estudante);
  console.log(chaves);

  if(!chaves.includes("enderecos")) {
    console.error("É necessário ter um endereço cadastrado")
  }

//Return an array of the values from the object keys
const valores = Object.values(estudante);

//Return the pair of key and values
const pares = Object.entries(estudante);
