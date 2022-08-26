const getAngkaTerbesarKedua = (arrAngka) => {
  if (arrAngka == null) {
    return 'ERROR: Enter numbers of array';
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
