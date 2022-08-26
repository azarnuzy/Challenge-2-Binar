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

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber('3'));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

console.log('==========');
console.log('NUMBER 3');
const checkEmail = (email) => {
  if (email == null) {
    return `Error: Enter an email`;
  } else if (typeof email !== 'string') {
    return `ERROR: '${email}' must be string and valid email address`;
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

console.log('==========');
console.log('NUMBER 4');
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

console.log('=========');
console.log('NUMBER 6');

const getAngkaTerbesarKedua = (arrAngka) => {
  if (arrAngka == null) {
    return 'ERROR: Enter array of numbers';
  } else if (!Array.isArray(arrAngka)) {
    return 'ERROR: Input must be array';
  } else {
    const tempRes = arrAngka.sort((a, b) => a - b).reverse();
    return tempRes[1];
  }
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());

console.log('======');
console.log('NUMBER 7');

const dataPenjulananPakAldi = [
  {
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 760000,
    kategori: 'Sepatu Sport',
    totalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Black Brown High - Original',
    hargaSatuan: 960000,
    kategori: 'Sepatu Sneaker',
    totalTerjual: 37,
  },
  {
    namaProduct: 'Sepatu Warrior Tristan Maroon High - Original',
    hargaSatuan: 360000,
    kategori: 'Sepatu Sneaker',
    totalTerjual: 90,
  },
  {
    namaProduct: 'Sepatu Warrior Rainbow Tosca Corduray - [BNIB] Orginal',
    hargaSatuan: 120000,
    kategori: 'Sepatu Sneaker',
    totalTerjual: 90,
  },
];

const hitungTotalPenjualan = (dataPenjualan) => {
  if (dataPenjualan == null) {
    return 'ERROR: please input the data first!';
  } else if(typeof dataPenjualan !== 'object') {
    return 'ERROR: input must be object of array'
  } else {
    let totalsTerjual = 0;
    dataPenjualan.forEach((data) => {
      totalsTerjual += data.totalTerjual;
    });
    return totalsTerjual;

  }
};

console.log(typeof dataPenjualan);

console.log(hitungTotalPenjualan(dataPenjulananPakAldi));
console.log(hitungTotalPenjualan(0));
console.log(hitungTotalPenjualan());
