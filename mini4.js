import * as base from './mini1.js';


// Ciklo for panaudojimas
console.log();
console.log("Ciklo for panaudojimas");

console.log("----1----");
console.log();
console.log("----a----");
let sumA = 0;

for (let i = 0; i <= 0; i++) {
  sumA += i;
}
console.log('intervalas 0 ... 0');
console.log('suma - ', sumA);


console.log("----b----");
let sumB = 0;
for (let i = 0; i <= 4; i++) {
  sumB += i;
}
console.log('intervalas 0 ... 4');
console.log('suma - ', sumB);


console.log("----c----");
let sumC = 0;
for (let i = 0; i <= 100; i++) {
  sumC += i;
}
console.log('intervalas 0 ... 100');
console.log('suma - ', sumC);


console.log("----d----");
let sumD = 0;
for (let i = 0; i <= 815; i++) {
  sumD += i;
}
console.log('intervalas 574 ... 815');
console.log('suma - ', sumD);


console.log("----e----");
let sumE = 0;
for (let i = -50; i <= 50; i++) {
  sumE += i;
}
console.log('intervalas -50 ... 50');
console.log('suma - ', sumE);


console.log("----f----");
let sumF = 0;
for (let i = -70; i <= 30; i++) {
  sumF += i;
}
console.log('intervalas -70 ... 30');
console.log('suma - ', sumF);


console.log();
console.log("----2----");
for (let i = base.ap.length - 1; i >= 0; i--) {
  console.log(base.ap[i]);
}

// console.clear();

function floatTxt1(n1, n2, n3,) {
  return `1) Skaičių intervale tarp ${n1} ir ${n2}, besidalijančių be liekanos iš 3 yra ${n3} vienetai.`
}
function floatTxt2(n1, n2, n3,) {
  return `2) Skaičių intervale tarp ${n1} ir ${n2}, besidalijančių be liekanos iš 5 yra ${n3} vienetai.`
}
function floatTxt3(n1, n2, n3,) {
  return `3) Skaičių intervale tarp ${n1} ir ${n2}, besidalijančių be liekanos iš 7 yra ${n3} vienetai.`
}

console.log();
console.log("----3----");
console.log();
console.log("----a----");
let div3a = 0;
for (let i = 0; i <= 11; i++) {
  if (i % 3 === 0) {
    div3a += 1
  } 
}
let div5a = 0;
for (let i = 0; i <= 11; i++) {
  if (i % 5 === 0) {
    div5a += 1
  } 
}
let div7a = 0;
for (let i = 0; i <= 11; i++) {
  if (i % 7 === 0) {
    div7a += 1
  } 
}
console.log(floatTxt1(0, 11, div3a));
console.log();
console.log(floatTxt2(0, 11, div5a));
console.log();
console.log(floatTxt3(0, 11, div7a));
console.log();



console.log("----b----");
let div3b = 0;
for (let i = 8; i <= 31; i++) {
  if (i % 3 === 0) {
    div3b += 1
  } 
}
let div5b = 0;
for (let i = 8; i <= 31; i++) {
  if (i % 5 === 0) {
    div5b += 1
  } 
}
let div7b = 0;
for (let i = 8; i <= 31; i++) {
  if (i % 7 === 0) {
    div7b += 1
  } 
}
console.log(floatTxt1(8, 31, div3b));
console.log();
console.log(floatTxt2(8, 31, div5b));
console.log();
console.log(floatTxt3(8, 31, div7b));
console.log();



console.log("----c----");
let div3c = 0;
for (let i = -18; i <= 18; i++) {
  if (i % 3 === 0) {
    div3c += 1
  } 
}
let div5c = 0;
for (let i = -18; i <= 18; i++) {
  if (i % 5 === 0) {
    div5c += 1
  } 
}
let div7c = 0;
for (let i = -18; i <= 18; i++) {
  if (i % 7 === 0) {
    div7c += 1
  } 
}
console.log(floatTxt1(-18, 18, div3c));
console.log();
console.log(floatTxt2(-18, 18, div5c));
console.log();
console.log(floatTxt3(-18, 18, div7c));