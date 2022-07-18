const Pessoa = {
    nome: 'Emanuel',
    idade: 22,
}

let array = [];
array.push(Pessoa, Pessoa, Pessoa, Pessoa);

var CalcularIdade = function (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

for (let i = 0; i < array.length; i++) {
    // Objeto, parametro
    console.log(CalcularIdade.call(array[i], 50));
}

// no apply(o argumento é um objeto)