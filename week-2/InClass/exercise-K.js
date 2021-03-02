const students = ["Leon", "Moussa", "Giomar", "Emilio", "Manuel", "Ronar", "Ato", "Digo", "Jaider", "Adrian", "Toño", "Juan", ];

function printArray(array) {
    const array2 = []
    for(let i=0; i < array.length; i++){
    console.log(array[i]);
    array2.push(array[i]);
    }
    console.log(array2)
    return array2;
}
printArray(students);

function checkType(usertype) {
    let checkArray = ["manager", "admin"];
    if (checkArray.includes(usertype)) {
      return "root user";
    } else {
      return "user isn't a manager or admin";
    }
  }
  function checkStart(username) {
    let checkArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    if (checkArray.includes(username[0])) {
      return "username star with vowel";
    } else {
      return " username don't start with vowel"
    }
  }
  
  function checkLength(username) {
    let usernameLength = username.length;
    if (usernameLength >= 5 && usernameLength <= 10) {
      return username.length;
    } else {
      return " username have an incorrected length";
    }
  }
  
  function arraysOfChecks(username, usertype) {
    let warning = [];
    if (checkType(usertype) !== "root user") {
      warning.push(checkType(usertype));
    }
    if (checkStart(username) !== "username start with vowel") {
      warning.push(checkStart(username));
    }
  
    if (checkLength(username) !== username.length) {
      warning.push(checkLength(username));
    }
  
    return warning;
  }
  
  function checkValidUser(username, usertype) {
        if (checkType(usertype) === "root user") {
          return "User valid";
        } else if (checkStart(username) === "username start with vowel" && checkLength(username) === username.length) {
          return "User valid";
        } else {
          return "User invalid        ***  " + arraysOfChecks(username, usertype) + "  ***"
        }
  
      }
  
  
  console.log(checkValidUser("Alberto", "comun"));