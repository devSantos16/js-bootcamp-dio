const FIRST_NAME = 'Emanuel';
//Não pode tbm
// FIRST_NAME = 'EDUARDO';
console.log(FIRST_NAME);
teste();


function teste(){
    // Como const é bloco | vai aceitar a redeclaração em outro escopo
    const FIRST_NAME = 'João';
    console.log(FIRST_NAME);
}
// Não pode
// nome = 'Brain';