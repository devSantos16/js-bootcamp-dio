const Pessoa = {
    nome: 'José',
    sobrenome: 'Farias da Silva',
    idade: 45,
    GetNomeCompleto: function () {
        return this.nome + " " + this.sobrenome;
    }
}

function getNomeCompleto(nome = 'João'){
    return this.nome + " " + this.sobrenome + " "+ nome;
}

let algumNome = getNomeCompleto.bind({nome: 'João', sobrenome: "Legolas"});

console.log(algumNome());


console.log(getNomeCompleto.call(Pessoa));
console.log(getNomeCompleto.apply(Pessoa));