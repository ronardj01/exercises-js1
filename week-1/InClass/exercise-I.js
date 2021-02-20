function edadFecha(edad) {
    let fecha = 2021 - edad;
    return fecha;
}

function dateOfBirth(nombre, edad) {
    let mensaje = `${nombre} nació en el ${edadFecha(edad)}`;
    return mensaje;
}

let persona = dateOfBirth("Luisa", 28);
console.log(persona);
