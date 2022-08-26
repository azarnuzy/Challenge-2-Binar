const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const convertNumberToRupiah = (number) => {
  const format = number.toString().split('').reverse().join('');
  const convert = format.match(/\d{1,3}/g);
  const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('');

  return rupiah;
};

const hitungTotalPenjualan = (dataPenjualan) => {
  if (dataPenjualan == null) {
    return 'ERROR: please input the data first!';
  } else if (typeof dataPenjualan !== 'object') {
    return 'ERROR: input must be array of object';
  } else {
    let totalKeuntungan = 0,
      totalModal = 0,
      persentaseKeuntungan = 0,
      jmlhProdukBukuTerlaris = 0,
      produkBukuTerlaris,
      penulisTerlaris;

    dataPenjualan.forEach((data) => {
      const {
        namaProduk,
        penulis,
        hargaBeli,
        hargaJual,
        totalTerjual,
        sisaStok,
      } = data;

      totalKeuntungan =
        totalKeuntungan + (hargaJual - hargaBeli) * totalTerjual;

      totalModal = totalModal + hargaBeli * (totalTerjual + sisaStok);

      if (jmlhProdukBukuTerlaris < totalTerjual) {
        jmlhProdukBukuTerlaris = totalTerjual;
        produkBukuTerlaris = namaProduk;
        penulisTerlaris = penulis;
      }
    });

    persentaseKeuntungan = (totalKeuntungan / totalModal).toFixed(2) * 100;

    return {
      totalKeuntungan: convertNumberToRupiah(totalKeuntungan),
      totalModal: convertNumberToRupiah(totalModal),
      persentaseKeuntungan: `${persentaseKeuntungan}%`,
      produkBukuTerlaris: produkBukuTerlaris,
      penulisTerlaris: penulisTerlaris,
    };
  }
};

console.log(hitungTotalPenjualan(dataPenjualanNovel));
console.log(hitungTotalPenjualan(0));
console.log(hitungTotalPenjualan());
