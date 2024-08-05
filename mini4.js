import * as base from './mini1.js';


// Ciklo for panaudojimas
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

console.log();
console.log("----2----");
console.log();


const word = 'apple';
let revWord = '';
for (let i = word.length - 1; i >= 0; i--) {
    revWord += word[i];

}
console.log(revWord);

const sentence = 'Apples taste great!';
let revSentence = '';
for (let i = sentence.length - 1; i >= 0; i--) {
    revSentence += sentence[i];

}
console.log(revSentence);

// console.clear();

console.log();
console.log("----3----");
console.log();
console.log("----a----");



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

console.clear();

// -----------darbas pamokoje------------


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

console.log(sumaIntervale(0, 0));
console.log(sumaIntervale(0, 4));
console.log(sumaIntervale(0, 100));
console.log(sumaIntervale(574, 815));
console.log(sumaIntervale(-50, 50));
console.log(sumaIntervale(-70, 30));
console.log(sumaIntervale(-70, 30,));
console.log(sumaIntervale(0, NaN));
console.log(sumaIntervale(0, Infinity));
console.log(sumaIntervale(Infinity, 5));

console.log(sumaIntervale(0, '0'));
console.log(sumaIntervale('0', 0));
console.log(sumaIntervale(777, true));
console.log(sumaIntervale(true, 777));
console.log(sumaIntervale(true, false));
console.log(sumaIntervale([], 777));
console.log(sumaIntervale([], [777]));
console.log(sumaIntervale([], {}));
console.log(sumaIntervale({}, [777]));
console.log(sumaIntervale(null, null));
console.log(sumaIntervale(undefined, 12));
console.log(sumaIntervale(sumaIntervale, 12));

console.log(sumaIntervale(10, NaN));
console.log(sumaIntervale(NaN, 10));

console.log(sumaIntervale());
console.log(sumaIntervale(10));

console.log(sumaIntervale(10.2, 14,6));
console.log(sumaIntervale(10 , 5));




