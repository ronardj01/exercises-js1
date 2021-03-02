function checkUserType(usertype) {
  const rootUser = ["manager", "admin"];
  if (rootUser.includes(usertype)) {
    return "root user";
  } else {
    return " user is not root";
  }
}

function checkUserStart(username) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  if (vowels.includes(username[0])) {
    return "username start with vowel";
  } else {
    return " username do not start with vowel";
  }
}

function checkLength(username) {
  if (username.length >= 5 && username.length <= 10) {
    return "username length is from 5 to 10";
  } else {
    return " username lenght is not between 5 to 10";
  }
}

function createWarning(username, usertype) {
  let message = [];
  if (checkUserType(usertype) !== "root user") {
    message.push(checkUserType(usertype));
  }

  if (checkUserStart(username) !== "username start with vowel") {
    message.push(checkUserStart(username));
  }

  if (checkLength(username) !== "username length is from 5 to 10") {
    message.push(checkLength(username));
  }
  return message;
}

function checkValidUser(username, usertype) {
  if (checkUserType(usertype) === "root user") {
    return "Valid user";
  } else if (checkUserStart(username) === "username start with vowel" && checkLength(username) === "username length is from 5 to 10") {
    return "Valid user"
  } else {
    return `User invalid    *** ${createWarning(username, usertype)}`;
  }
}

console.log(checkValidUser("ronar", "comun"));
