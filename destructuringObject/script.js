const pessoa = {
    name: 'Elton',
    age: 26
}

const fruits = ['banana', 'pera', 'uva'];


const [banana, ...rest] = fruits;

console.log(rest);

const {name: idade} = pessoa;

console.log(idade);