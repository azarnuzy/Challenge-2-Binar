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
  } else if (typeof dataPenjualan !== 'object') {
    return 'ERROR: input must be array of object';
  } else {
    let totalsTerjual = 0;
    dataPenjualan.forEach((data) => {
      totalsTerjual += data.totalTerjual;
    });
    return totalsTerjual;
  }
};

console.log(hitungTotalPenjualan(dataPenjulananPakAldi));
console.log(hitungTotalPenjualan(0));
console.log(hitungTotalPenjualan());
