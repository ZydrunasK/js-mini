import * as base from './mini1.js';

// Veiksmai su kintamaisiais

console.log("-------------------------");
console.log("Veiksmai su kintamaisiais");

// ----1----
function sumNum(nr1, nr2, nr3) {
  return "Sum using function: " + (nr1 + nr2 + nr3);
}
function sumStrings(str1, str2, str3) {
  return `String sum using function: ${str1} ${str2} ${str3} `;
}

console.log("----1----");
const sumNumbers = base.nine + base.eight + base.seven;
console.log(sumNumbers);
console.log(sumNum(base.seven, base.eight, base.nine));

// ----2----
console.log("----2----");
const sumStr = base.ap + " " + base.pe + " " + base.df;
console.log(sumStr);
console.log(sumStrings(base.ap, base.pe, base.df));

// ----3----
function arrayMath(nr1,) {
  return nr1[0] - nr1[1] + nr1[2] - nr1[3] + nr1[4];
}
console.log("----3----");

let liNumMath1 = arrayMath(base.liN1);
let liNumMath2 = arrayMath(base.liN2);
let liNumMath3 = arrayMath(base.liN3);
// new using function
console.log(liNumMath1);
console.log(liNumMath2);
console.log(liNumMath3);
// old using individual
let index = 0;
let sumListNumb1 = base.liN1[index++];
sumListNumb1 -= base.liN1[index++];
sumListNumb1 += base.liN1[index++];
sumListNumb1 -= base.liN1[index++];
sumListNumb1 += base.liN1[index++];
// console.log(sumListNumb1);

let index1 = 0;
let sumListNumb2 = base.liN2[index1++];
sumListNumb2 -= base.liN2[index1++];
sumListNumb2 += base.liN2[index1++];
sumListNumb2 -= base.liN2[index1++];
sumListNumb2 += base.liN2[index1++];
// console.log(sumListNumb2);

let index2 = 0;
let sumListNumb3 = base.liN3[index2++];
sumListNumb3 -= base.liN3[index2++];
sumListNumb3 += base.liN3[index2++];
sumListNumb3 -= base.liN3[index2++];
sumListNumb3 += base.liN3[index2++];
// console.log(sumListNumb3);

// ----4----

function liStrRev(s1) {
    return `${s1[4]}, ${s1[3]}, ${s1[2]}, ${s1[1]}, ${s1[0]}`;
  }
  const liStrRev1 = liStrRev(base.liStr1);
  const liStrRev2 = liStrRev(base.liStr2);
  const liStrRev3 = liStrRev(base.liStr3);
  
  console.log("----4----");
  // new using function
  console.log(liStrRev1);
  console.log(liStrRev2);
  console.log(liStrRev3);
  // old using individual
  let index3 = base.liStr1.length - 1;
  let revLiStr1 = base.liStr1[index3--] + ", ";
  revLiStr1 += base.liStr1[index3--] + ", ";
  revLiStr1 += base.liStr1[index3--] + ", ";
  revLiStr1 += base.liStr1[index3--] + ", ";
  revLiStr1 += base.liStr1[index3--];
  // console.log(revLiStr1);
  
  let index4 =base.liStr2.length - 1;
  let revLiStr2 = base.liStr2[index4--] + ", ";
  revLiStr2 += base.liStr2[index4--] + ", ";
  revLiStr2 += base.liStr2[index4--] + ", ";
  revLiStr2 += base.liStr2[index4--] + ", ";
  revLiStr2 += base.liStr2[index4--];
  // console.log(revLiStr2);
  
  let index5 = base.liStr3.length - 1;
  let revLiStr3 = base.liStr3[index5--] + ", ";
  revLiStr3 += base.liStr3[index5--] + ", ";
  revLiStr3 += base.liStr3[index5--] + ", ";
  revLiStr3 += base.liStr3[index5--] + ", ";
  revLiStr3 += base.liStr3[index5--];
  // console.log(revLiStr3);