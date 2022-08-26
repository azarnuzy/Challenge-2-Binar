const isiValidPassword = (password) => {
  if (password == null) {
    return 'ERROR: Enter a password';
  } else if (typeof password !== 'string') {
    return `'ERROR: '${password}' must be string and valid password`;
  } else {
    const passCheckRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/g;

    return password.match(passCheckRegex) ? true : false;
  }
};

console.log(isiValidPassword('Meong2021'));
console.log(isiValidPassword('meong2021'));
console.log(isiValidPassword('@eong'));
console.log(isiValidPassword('Meong2'));
console.log(isiValidPassword(0));
console.log(isiValidPassword());
