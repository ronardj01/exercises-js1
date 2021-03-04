const studentsEspanol = ["Leon", "Moussa", "Giomar", "Emilio", "Manuel", "Ronar", "Ato", "Digo", "Jaider", "Adrian", "Toño", "Juan", ];
const studentsEnglish = ["Keti", "Mampreet", "Kiki", "Kris", "Kimberly", "Artur"]

const allStudents = studentsEspanol.concat(studentsEnglish);
console.log(allStudents.sort());

function getString(nombre, array){
    if(array.includes(nombre)) {
        return `${nombre} esta en la clase con ${array.join(", ")}`;
    } else {
        return `${nombre} no esta en la clase con ${array.join(", ")}`
    }
}

console.log(getString("Ronar", studentsEspanol));