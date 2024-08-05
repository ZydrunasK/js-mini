import * as base from './mini1.js';

console.log("----1----");
console.log();

function sumaIntervale(a, b) {
  // 1. validation of information (params)
  if (typeof a !== 'number') {
    return 'ERROR: pirma reiksme turi buti skaicius';
  }
  if (a === Infinity || a === -Infinity) {
    return 'ERROR: biski perdaug nori';
  }
  if (isNaN(a)) {
    return 'ERROR: pirma reiksme turi buti skaicius';
  }
  if (a % 1 !== 0) {
    return 'ERROR: pirma reiksme turi buti sveikas skaicius';
  }

  if (typeof b !== 'number') {
    return 'ERROR: antra reiksme turi buti skaicius';
  }
  if (b === Infinity || b === -Infinity) {
    return 'ERROR: biski perdaug nori';
  }
  if (isNaN(b)) {
    return 'ERROR: pirma reiksme turi buti skaicius';
  }
  if (b % 1 !== 0) {
    return 'ERROR: antra reiksme turi buti sveikas skaicius';
  }

  if (a > b) {
    return 'ERROR: pirma reiksme turi buti didesne uz antra';
  }
  // 2. logic
    let rez = 0;
    for (let i = a; i <= b; i++) {
      rez += i;
    }

  // 3. results of logic validation
    if (a % 1 !== 0) {
      return 'ERROR: '
    }
  // 4. result
  return rez;
}

console.log('a. ', sumaIntervale(0, 0));
console.log('b. ', sumaIntervale(0, 4));
console.log('c. ', sumaIntervale(0, 100));
console.log('d. ', sumaIntervale(574, 815));
console.log('e. ', sumaIntervale(-50, 50));
console.log('f. ', sumaIntervale(-70, 30));


console.log();
console.log("----2----");
console.log();

function wordRev(str) {
  let revWord = ''
  for (let i = str.length - 1; i >= 0; i--) {
    revWord += str[i];
}
return revWord;
}

const word = 'apple';
let revWord = '';

console.log(wordRev('apple'));
console.log(wordRev('stinky tacocat'));

// console.clear();

console.log();
console.log("----3----");
console.log();
console.log("----a----");



function divByInArray(start, end, div) {
  let base = 0;

  for (let i = start; i <= end; i++) {
    if (i % div === 0) {
      base += 1;
    }  
  }
  return `Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš ${div} yra ${base}.`
}
console.log(divByInArray(0, 11, 3));
console.log(divByInArray(0, 11, 5));
console.log(divByInArray(0, 11, 7));
console.log("----b----");
console.log(divByInArray(8, 31, 3));
console.log(divByInArray(8, 31, 5));
console.log(divByInArray(8, 31, 7));
console.log("----c----");
console.log(divByInArray(-18, 18, 3));
console.log(divByInArray(-18, 18, 5));
console.log(divByInArray(-18, 18, 7));

/* first version before i learned new stuff in class

// Ciklo for panaudojimas (cycle)
console.log();
console.log("Ciklo for panaudojimas");

console.log("----1----");
// -------------a----------------
console.log();
let a = 0;
for (let i = 0; i <= 0; i++) {
  a += i;
}
console.log(`a. sum is ${a}`);   


// -------------b----------------
let b = 0;
for (let i = 0; i <= 4; i++) {
  b += i;
}
console.log(`b. sum is ${b}`);   
console.log('---------');


// -------------c----------------
let c = 0;
for (let i = 0; i <= 100; i++) {
  c += i;
}
console.log(`c. sum is ${c}`);   
console.log('---------');


// -------------d----------------
let d = 0;
for (let i = 574; i <= 815; i++) {
  d += i;
}
console.log(`d. sum is ${d}`);   
console.log('---------');


// -------------e----------------
let e = 0;
for (let i = -50; i <= 50; i++) {
  e += i;
}
console.log(`e. sum is ${e}`);   
console.log('---------');


// -------------f----------------
let f = 0;
for (let i = -70; i <= 30; i++) {
  f += i;
}
console.log(`f. sum is ${f}`); 



function floatTxt1(n1, n2, n3,) {
  return `1) Skaičių intervale tarp ${n1} ir ${n2}, besidalijančių be liekanos iš 3 yra ${n3} vienetai.`
}
function floatTxt2(n1, n2, n3,) {
  return `2) Skaičių intervale tarp ${n1} ir ${n2}, besidalijančių be liekanos iš 5 yra ${n3} vienetai.`
}
function floatTxt3(n1, n2, n3,) {
  return `3) Skaičių intervale tarp ${n1} ir ${n2}, besidalijančių be liekanos iš 7 yra ${n3} vienetai.`
}


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
 */


