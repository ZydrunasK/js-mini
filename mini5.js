import * as base from './mini1.js';


// -----------1------------
// Funkcija pavadinimu “tusciaFunkcija”:
function tusciaFunkcija() {}
console.log(tusciaFunkcija());


// -----------2------------
// Funkcija pavadinimu “daugyba”:
console.log();
console.log('Daugyba');

let s1 = 4;
let s2 = 3;
let s3 = 0;
function daugyba(n1, n2) {
    s3 = n1 * n2;
    return s3;
}
console.log(daugyba(s1, s2));
console.log(daugyba(s3, s2));
console.log(daugyba(s1, s3));


// Funkcija pavadinimu “daugyba” v2:
console.log();
console.log('Daugyba v2');

function daugybaV2(n1, n2) {
    let n3 = n1 * n2;
    return n3;
}
console.log(daugybaV2(1, 2));
console.log(daugybaV2(3, 2));
console.log(daugybaV2(1, 3));


// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje” 2:
console.log();
console.log('Skaitmenu Kiekis Skaiciuje');
console.log('--------------------------');
 

function skaitmenuKiekisSkaiciuje(a) {
let n = a;
if (n < Infinity) {
if (typeof n !== "number") {
    return 'Pateikta netinkamo tipo reikšmė.';   
} else if (n % 1 !== 0) {
    n = `${a}`;
    let nL = n.length - 1;
    return `1. rezultatas: ${nL}`;
} else {
    n = `${a}`;
    let nL = n.length;
    return `1. rezultatas: ${nL}`;
}
} else {
    return 'Pateikta netinkamo tipo reikšmė.'; 
}
}
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));

const asd = NaN < Infinity ? true : false;

console.log(asd);


















