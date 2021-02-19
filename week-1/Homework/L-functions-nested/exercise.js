var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// Ejercicio 1.

function percentage(amt, total) {
    let porciento = amt / total * 100;
    let result = Math.round(porciento);
    return result;
}

function createGreeting(stdOrMentor,amt,total) {
    let porciento = percentage(amt, total);
    const mensaje = `Percentage ${stdOrMentor}: ${porciento}%`;
    return mensaje;
}

let estudiantes = createGreeting("students", 23 ,37);
let profesores = createGreeting("mentors",14 ,37);

console.log(estudiantes);
console.log(profesores);
console.log("");

// Ejercicio 2.
console.log("*****///////////////////////*****");

function changeUppercase (toChange) {
    return toChange.toUpperCase();
}

function uppercaseGreeting(saludo, nombre) {
    let mensaje = `${changeUppercase(saludo)} ${changeUppercase(nombre)}`;
    return mensaje;
}

let saludo1 = uppercaseGreeting("hello", mentor1);
let saludo2 = uppercaseGreeting("hola", mentor2);

console.log(saludo1);
console.log(saludo2);
