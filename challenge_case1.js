// case 1
// Buatlah algoritma untuk menampilkan  pengkuadratan dan pembagian angka tertentu. input angka melalui prompt dan tampilkan di console

var angka1 = prompt('input angka 1'); 
var angka2 = prompt('input angka 2'); 

var pengkuadratan = Math.pow(angka1, angka2);
var pembagian = angka1/angka2;

alert(`hasil pengkuadratan angka ${angka1} dan angka  ${angka2} =  ${pengkuadratan}`);
alert(`hasil pembagian ${angka1} dan ${angka2} = ${pembagian}`);