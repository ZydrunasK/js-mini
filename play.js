let a = 1;
let b = 2;

a = 3;

const c = a + b;

let ca = c * a;
let cb = c * b;




console.log('a =', a);
console.log('b =', b);
console.log('ca =', 'c * a =', ca);
console.log('cb =', 'c * b =', cb);
console.log('ca < cb: ', Boolean (ca < cb), '(', ca, '<', cb, ')');
console.log('ca > cb: ', Boolean (ca > cb), '(', ca, '>', cb, ')');
console.log('ca = cb: ', Boolean (ca == cb), '(', ca, "=", cb, ')');

console.clear();
// simple math

let q = 2;
let w = 5;
let e = 8;

const r = (q * w)/ e;

console.log('r = (',q,'*',w,') /',e);
console.log(r);

console.log('----------------------------');

console.log(2 || 4);
console.log(4 || 2);
console.log(5 || 7);
console.log(8 && 9);
console.log(4 && 8);
console.log(2 && 1);
console.log(2 && 1);
console.log(1 && 2 || 3);
console.log(1 || 2 && 3);

console.clear();

const stuff = 2 + 5 * (4*8) - 42;
const stuff2 = 46+59*748-123;
const stuff3 = (48*(48*5))/(45+95);


console.log(stuff);
console.log(stuff2);
console.log(stuff3);

console.clear();

let index = 0;

const skaiciai = [5, 4, 6, 8, 7, 10, 2, 1, 3];

let skaiciuSum = skaiciai[index++];
skaiciuSum += skaiciai[index++];
skaiciuSum += skaiciai[index++];
skaiciuSum += skaiciai[index++];
skaiciuSum += skaiciai[index++];
skaiciuSum += skaiciai[index++];
skaiciuSum += skaiciai[index++];
skaiciuSum += skaiciai[index++];
skaiciuSum += skaiciai[index++];

console.log('kiekis - ', skaiciai.length);
console.log('current index', index++);
console.log(skaiciuSum);
console.clear();

const pc = {
    monitor: {
        width: 1920,
        height: 1080,
    },
    ram: 16,
    hd: 100,
    keyboard: 'en',
    mouse: true,
    power: true,
    'cpu': 'On Fire!',
    123: {
        one: 1,
        two: 2,
        three: 3,
    },
};

const param = 'monitor';
const resW = 'width';
const resH = 'height';

console.log(pc[param][resW]);
console.log(pc['cpu']);
console.log(pc['123']['two']);

console.clear();

const house = {
    width: 16,
    height: 3,
    depth: 5,
};

const houseKeys = Object.keys(house);
console.log(houseKeys);
console.log(Object.keys(house));






