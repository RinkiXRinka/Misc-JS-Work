//Section 2 --------------------------------------------------
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

 console.log(Boolean(a < b));
 console.log(Boolean(c > d));
 console.log(Boolean('Name' === 'Name'));
 console.log(Boolean(a < b < c));
 console.log(Boolean(a <= a < d));
 console.log(Boolean(e != 'Kevin'));
 console.log(Boolean(48 == '48'));
 console.log(Boolean(f != e));

 /*
true
true
true
true
true
true
true
true
 */

//-----------------------------------------------------

let g = 0;
console.log(g);
g = b + c;
console.log(g);

/*
0
110
*/
