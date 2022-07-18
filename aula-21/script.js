let string = "";
tryCatch(string);

function tryCatch(string) {
    try {
        VerificarString(string)
    }
    catch (e) {
        console.log(e);
    }
    finally{
        const error = new Error('Mensagem Invalida');
        error.name = 'InvalidMessage';
        throw(error);
    }
}

function VerificarString(string) {
    if (!string) throw "String invalida";
}