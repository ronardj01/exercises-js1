// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

//Callback funcion idependiente
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multimplicar(number) {
    return number * 100;
}

let numberProducto = numbers.map(multimplicar);
console.log(numberProducto);

//Callback funcion interna
let numberProducto1 = numbers.map(function multiplicar1(number) { return number * 100 })
console.log(numberProducto1);

//Callback funcion anonima
let numberProducto2 = numbers.map(function (number) { return number * 100 })
console.log(numberProducto2)

//Callback funcion flecha
let numberProducto3 = numbers.map(number => number * 100)
console.log(numberProducto3)
