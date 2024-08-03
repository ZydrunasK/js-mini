import * as base from './mini1.js';


// Kintamuju palyginimas

console.log("-------------------------");
console.log("Kintamuju palyginimas");

function numMore(nr1, nr2) {
  return nr1 > nr2 ? "Pomidoras" : "Bandykite kitą kartą.";
}
function numLess(nr1, nr2) {
  return nr1 < nr2 ? "Pomidoras" : "Bandykite kitą kartą.";
}
function numEqual(nr1, nr2) {
  return nr1 === nr2 ? "Pomidoras" : "Bandykite kitą kartą.";
}

function numNotEqual(nr1, nr2) {
  return nr1 !== nr2 ? "Pomidoras" : "Bandykite kitą kartą.";
}

function numMoreEqual(nr1, nr2) {
  return nr1 >= nr2 ? "Pomidoras" : "Bandykite kitą kartą.";
}

function numLessEqual(nr1, nr2) {
  return nr1 <= nr2 ? "Pomidoras" : "Bandykite kitą kartą.";
}

const nr1 = 6;
const nr2 = 5;
const txt1 = "hello";
const txt2 = "goodbye";
// ----1----

console.log("----1----");
console.log("----a.----");
console.log(numMore(nr1, nr2));
console.log("----b.----");
console.log(numLess(nr1, nr2));
console.log("----c.----");
console.log(numEqual(nr1, nr2));
console.log("----d.----");
console.log(numNotEqual(nr1, nr2));
console.log("----e.----");
console.log(numMoreEqual(nr1, nr2));
console.log("----f.----");
console.log(numLessEqual(nr1, nr2));

// ----2----

console.log("----2----");

console.log('txt1 length: ', txt1.length);
console.log('txt2 length: ', txt2.length);

console.log();
console.log("----3----");
console.log("----a----");
function strMore(s1, s2) {
  return s1.length > s2.lenght ? "Pomidoras" : "Bandykite kitą kartą.";
}
function strLess(s1, s2) {
  return s1.length < s2.lenght ? "Pomidoras" : "Bandykite kitą kartą.";
}
function strEqual(s1, s2) {
  return s1.length === s2.lenght ? "Pomidoras" : "Bandykite kitą kartą.";
}

function strNotEqual(s1, s2) {
  return s1.length !== s2.lenght ? "Pomidoras" : "Bandykite kitą kartą.";
}

function strMoreEqual(s1, s2) {
  return s1.length >= s2.lenght ? "Pomidoras" : "Bandykite kitą kartą.";
}

function strLessEqual(s1, s2) {
  return s1.length <= s2.lenght ? "Pomidoras" : "Bandykite kitą kartą.";
}

console.log(strMore(txt1, txt2));
console.log("----b.----");
console.log(strLess(txt1, txt2));
console.log("----c.----");
console.log(strEqual(txt1, txt2));
console.log("----d.----");
console.log(strNotEqual(txt1, txt2));
console.log("----e.----");
console.log(strMoreEqual(txt1, txt2));
console.log("----f.----");
console.log(strLessEqual(txt1, txt2));

console.log();
console.log("----4----");


let ln1 = base.liN1.length;
let ls1 = base.liStr1.length;
console.log('Number list length: ', ln1);
console.log('String list length: ', ls1);

console.log();
function liMore(a, b) {
  return a > b ? "Pomidoras" : "Bandykite kitą kartą.";
}
function liLess(a, b) {
  return a < b ? "Pomidoras" : "Bandykite kitą kartą.";
}
function liEqual(a, b) {
  return a === b ? "Pomidoras" : "Bandykite kitą kartą.";
}
function liNotEqual(a, b) {
  return a !== b ? "Pomidoras" : "Bandykite kitą kartą.";
}
function liMoreEqual(a, b) {
  return a >= b ? "Pomidoras" : "Bandykite kitą kartą.";
}
function liLessEqual(a, b) {
  return a <= b ? "Pomidoras" : "Bandykite kitą kartą.";
}

console.log("----5----");
console.log("----a----");
console.log(liMore(ln1, ls1));
console.log("----b.----");
console.log(liLess(ln1, ls1));
console.log("----c.----");
console.log(liEqual(ln1, ls1));
console.log("----d.----");
console.log(liNotEqual(ln1, ls1));
console.log("----e.----");
console.log(liMoreEqual(ln1, ls1));
console.log("----f.----");
console.log(liLessEqual(ln1, ls1));
