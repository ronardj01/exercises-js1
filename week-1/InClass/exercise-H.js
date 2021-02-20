
// Esta funcion multiplica dos numeros
function multiplicar(multiplicando, multiplicador) {
    let producuto = multiplicando * multiplicador;
    let resultado = "El producot de " + multiplicando + " por " + multiplicador + " es " + producuto;
    return resultado;
}

let multiplicacion = multiplicar(3,9);
console.log(multiplicacion);

function sum(a,b) {
    total = a + b;
    return "la suma de " + a + " mas "+ b + " es " +total;
}

function rest(a,b) {
    total = a - b;
    return "la resta de " + a + " menos "+ b + " es " +total;
}

function div(a,b) {
    total = a / b;
    return "la division de " + a + " entre "+ b + " es " +total;
}

let suma = sum(3,45);
let resta = rest(34,23);
let divivision = div(48,9);

console.log(suma);
console.log(resta);
console.log(divivision);