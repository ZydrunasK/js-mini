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

 /*  console.log(sumaIntervale(0, NaN));
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
  console.log(sumaIntervale(10 , 5)); */
  
  // console.clear();
  
  function sRev(s) {
    if (typeof s !== 'string') {
      return 'ERROR: reikia duoti string tipo reiksme'
    }
    if (s === '') {
      return 'ERROR: Nera ivesta reiksme'
    }
  
    let revStr = '';
    for (let i = s.length - 1; i >= 0; i--) {
      revStr += s[i];
    }
    return revStr;
  }
  
  console.log(sRev('tree'));
  console.log(sRev('tacocat'));
  console.log(sRev(''));
  console.log('------------------');
  console.log(sRev(1));
  console.log(sRev(true));
  console.log(sRev(null));
  console.log(sRev({}));
  console.log(sRev([]));
  console.log(sRev());
  