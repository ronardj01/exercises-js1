function cambiarMayuscula(array) {
  return array.map((nombre) => nombre.toUpperCase());
}

function abracaFunction(yourFunc) {
  console.log(
    "I am abracaFunction! Watch as I mutate an  array of strings to your heart's content!"
  );
  const abracaArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];
  const abracaOutput = yourFunc(abracaArray);
  return abracaOutput;
}

console.log(abracaFunction(cambiarMauscula))