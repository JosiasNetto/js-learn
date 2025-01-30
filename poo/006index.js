import User from "./004User.js"
import Admin from "./005Admin.js"
import Docente from "./005Docente.js"

const novoUser = new User("Joca", "joca@gmai.com", "08/02/2003");
console.log(novoUser.exibirInfos());
novoUser.nome = "Jessica";//Graças ao setter, permite modificar propriedade privada
console.log(novoUser.nome)//Graças ao getter, permite acessar propriedade privada

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2005/01/01");
console.log(novoAdmin); //Nao mostra nada pois suas propriedades sao privadas
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.nome)//Possivel vizualizar devido o get declarado em User

const novoDocente = new Docente("jamas", "ja@r.com", "20013/21/11");
console.log(novoDocente.exibirInfos());

const dadosFicticios = User.exibirInfos("Mariangela", "c&c.com");
console.log(dadosFicticios);