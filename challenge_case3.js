// case 3
// tampilkanlah tanggal bulan dan tahun hari ini, besok dan kemarin

const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

let sekarang = new Date();
sekarang.toDateString();
console.log(`hari ini adalah ${sekarang.getDate()} ${bulan[sekarang.getMonth()]} ${sekarang.getFullYear()}`);

let besok = new Date();
besok.setDate(besok.getDate()+1);
console.log(`hari Besok adalah ${besok.getDate()} ${bulan[besok.getMonth()]} ${besok.getFullYear()}`)

let kemarin = new Date();
kemarin.setDate(kemarin.getDate()-1);
console.log(`hari kemarin adalah ${kemarin.getDate()} ${bulan[kemarin.getMonth()]} ${kemarin.getFullYear()}`)