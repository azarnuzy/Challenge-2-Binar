console.log('NUMBER 1');
function changeWord(selectedText, changedText, text) {
  return text.replace(selectedText, changedText);
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 =
  'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

console.log(changeWord('mencintai', 'membenci', kalimat1));
console.log(changeWord('bromo', 'semeru', kalimat2));

console.log('===========');
console.log('NUMBER 2');

const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber === 'undefined') {
    return 'Error: Bro where is the paramater';
  }

  if (Number.isInteger(givenNumber)) {
    return givenNumber % 2 === 0 ? 'GENAP' : 'GANJIL';
  } else {
    return 'Error: Invalid data type';
  }
};

console.log(checkTypeNumber('1'));
console.log(checkTypeNumber(1));
console.log(checkTypeNumber(2));
console.log(checkTypeNumber(2.4));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

console.log('==========');
console.log('NUMBER 3');
const checkEmail = (email) => {
  const validateEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const errorString = /[\w+-\.]+/g;

  if (email == null) {
    return `Error: Enter an email`;
  }

  if (typeof email !== 'string') {
    return `ERROR ${email} must be string and valid address`;
  }

  if (validateEmailRegex) {
    if (errorString) {
      return `Error: ${email} is an invalid email address`;
    }
    return 'VALID';
  } else {
    return 'INVALID';
  }
};

console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkEmail(3221));
console.log(checkEmail());

console.log('==========');
console.log('NUMBER 5');

const getSplitName = (personName) => {
  if (typeof personName === 'string') {
    const arrayName = personName.split(' ');
    const jumlahKata = arrayName.length;
    if (jumlahKata >= 1 && jumlahKata <= 3) {
      if (jumlahKata == 1) {
        return {
          firstName: arrayName[0],
          middleName: null,
          lastName: null,
        };
      } else if (jumlahKata == 2) {
        return {
          firstName: arrayName[0],
          middleName: null,
          lastName: arrayName[1],
        };
      } else {
        return {
          firstName: arrayName[0],
          middleName: arrayName[1],
          lastName: arrayName[2],
        };
      }
    } else {
      return 'Error: This function is only for 3 characters name';
    }
  } else {
    return 'Error: Input must be string';
  }
};

console.log(getSplitName('Aldi Daniela Pranata'));
console.log(getSplitName('Dwi Kuncoro'));
console.log(getSplitName('Aurora'));
console.log(getSplitName('Aurora Aureliya Sukma Darma'));
console.log(getSplitName(0));
