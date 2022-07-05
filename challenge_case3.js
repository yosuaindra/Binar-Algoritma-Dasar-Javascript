let sekarang = new Date();
sekarang = sekarang.toDateString();
console.log("hari ini adalah "+sekarang);

let besok = new Date(sekarang);
besok.setDate(besok.getDate()+1);
console.log("hari Besok adalah "+besok.toDateString());

let kemarin = new Date(sekarang);
kemarin.setDate(kemarin.getDate()-1);
console.log("hari Kemarin adalah "+kemarin.toDateString());