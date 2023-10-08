
//if,else,nested if (menggunakan nested if, program hitung diskon sesuai kondisi)
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan total belanja : ", (total) => {
  let diskon_total;

  if (total > 500000) {
    diskon_total = 0.2 * total;
  } else if (total > 250000) {
    diskon_total = 0.1 * total;
  }
    else if (total > 100000) {
    diskon_total = 0.05 * total;
  } else {
    diskon_total = 0;
  }

  console.log("\n-----NOTA PEMBAYARAN----");
  console.log("Total Pembelanjaan : " + total);
  console.log("Total diskon : " + diskon_total); 
  console.log("Total Pembayaran : " + (total - diskon_total)); 

  rl.close();
});


//switch case (program hitung BMI)
let berat = 52;
let tinggi = 165;
let BMI = berat / ((tinggi / 100) * (tinggi / 100));

switch (true) {
  case BMI < 18.50:
    console.log(
      `Berat badan ${berat} dengan tinggi badan ${tinggi}\ntermasuk kategori KURANG`
    );
    break;
  case BMI >= 18.50 && BMI <= 22.90:
    console.log(
      `Berat badan ${berat} dengan tinggi badan ${tinggi}\ntermasuk kategori NORMAL`
    );
    break;
  case BMI >= 23.00 && BMI <= 29.90:
    console.log(
      `Berat badan ${berat} dengan tinggi badan ${tinggi}\ntermasuk kategori BERLEBIH`
    );
    break;
  case BMI > 30.00:
    console.log(
      `Berat badan ${berat} dengan tinggi badan ${tinggi}\ntermasuk kategori OBESITAS`
    );
    break;
  default:
    console.log("Kategori tidak ditemukan");
    break;
}


// for statement (program hitung kelipatan 3)
console.log("ANGKA KELIPATAN TIGA (3)");
let batas = 40;

for (let a = 3; a <= batas; a = a + 3) {
  console.log(a + " ");
}


//while, do while (program perulangan do while membuat star segitiga)
const kolom = 3;
let baris = 1;

while (baris <= kolom) {
  let output = '';

  for (let space = kolom - baris; space > 0; space--) {
   
    output += ' ';
  }

  for (let star = 1; star <= baris; star++) {
    output += '*';
  }

  console.log(output);
  baris++;
}


//function (program ubah suhu)
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  const celsiusValue = 25; 

  const fahrenheitResult = celsiusToFahrenheit(celsiusValue);
  console.log(`${celsiusValue}°C = ${fahrenheitResult.toFixed(2)}°F`);
  
  const fahrenheitValue = 77; 
  
  const celsiusResult = fahrenheitToCelsius(fahrenheitValue);
  console.log(`${fahrenheitValue}°F = ${celsiusResult.toFixed(2)}°C`);
  
