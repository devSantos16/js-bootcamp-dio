console.log(ProcurarParametroMaior(1,2,4,90,5));
function ProcurarParametroMaior() {
    let max = -Infinity;

    if (arguments.length == 0) {
        return 'Não existe Parametro';
    }

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}