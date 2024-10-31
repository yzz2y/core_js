/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;

console.log(String(YEAR));
console.log(YEAR + '');



// undefined, null

let days = null;

console.log(days + '');

let undef = undefined;

console.log(undef + '');



// boolean

let isClicked = true;

console.log(String(isClicked));




/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;

console.log(Number(friend)); // NaN



// null

let money = null;

console.log(money / 1); // 0



// boolean

let isActive = true;

console.log(isActive * 1); // 1



// string

let num = '100';

// 명시적 형변환
console.log(Number(num));
// 암시적 형변환
console.log(+num);
console.log(num / 1);
console.log(num * 1);



// numeric string

const width = '120.5px';

console.log(width * 1);

console.log(parseInt(width));
console.log(parseFloat(width));



/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

// 명시적 형변환
console.log(Boolean(friend)); // friend: undefined -> false
console.log(Boolean(null)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // true
console.log(Boolean(' ')); // true
console.log(Boolean('0')); // true

// 암시적 형변환
console.log(!!'0'); // true
console.log(!!{}); // true
console.log(!![]); // true
