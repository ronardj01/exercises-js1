const name = " Daniel  ";
message = `My name is ${name.trim()} and my name is ${name.trim().length} characters long.`;
console.log(message);

function greetingAndName(nombre) {
    let message = `My name is ${nombre} and my name is ${nombre.trim().length} characters long`;
    return message.trim();
}

console.log(greetingAndName(" Ronar      "));
 