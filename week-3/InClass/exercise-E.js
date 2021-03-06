function ageInYears(birthYear) {
    let fecha = new Date().getFullYear();
    return fecha - birthYear;
}

let ages = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

let ages2 = ages.map(ageInYears);

console.log(ages2);
