function cambiarMayuscula(array) {
    let arrayUpperCase = array.map((nombre) => nombre.toUpperCase());
    return arrayUpperCase.sort()
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
  
  console.log(abracaFunction(cambiarMayuscula))