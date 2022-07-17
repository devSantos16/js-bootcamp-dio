const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}
const soma = function(num1, num2){
    return num1 + num2;
}
const subtracao = function(num1,num2){
    return num1 - num2;
}

console.log(calc(subtracao, 2, 2));