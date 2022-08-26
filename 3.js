const checkEmail = (email) => {
  if (email == null) {
    return `Error: Enter an email`;
  } else if (typeof email !== 'string') {
    return `'ERROR: ${email}' must be string and valid email address`;
  } else {
    const validateEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const errorString = /^[\w+-\.]+$/g;
    if (email.match(validateEmailRegex)) {
      return 'VALID';
    } else {
      if (email.match(errorString)) {
        return `Error: ${email} is an invalid email address`;
      }
      return 'INVALID';
    }
  }
};

console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkEmail(3221));
console.log(checkEmail());
