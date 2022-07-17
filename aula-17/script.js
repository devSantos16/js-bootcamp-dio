var Spread = function(x,y,z){
    return `${x}, ${y}, ${z}`;
}

var Rest = function(...array){
    return(array[1]);
}

console.log(Spread(...[1,2,3]))
console.log(Rest(1,2,3))

const pessoa = {
    nome: 'Emanuel',
    sobrenome: "Dos Santos Paz",
    idade: 22
};

Usersearch = function(Parametro, objeto){
    return Parametro(objeto)
}

Username = function({nome}){
    return nome;
}

Userage = function({age}){
    return age;
}

getFullName = function({nome, sobrenome}){
    return `${nome} ${sobrenome}`; 
}



console.log(Usersearch(Username, pessoa));
console.log(Usersearch(Userage, pessoa));
console.log(Usersearch(getFullName, pessoa));






