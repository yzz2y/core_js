/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
console.log('1. ' + empty);
// null은 typeof 사용시 객체로 나옴


// 2. 값이 할당되지 않은 상태

let unassigned;
console.log('2. ' + typeof unassigned);


// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

let str1 = 'hello world';
let str2 = "hello world";
let str3 = `hello world`;

console.log('3. ' + typeof str1);
console.log('3. ' + typeof str2);
console.log('3. ' + typeof str3);


// 4. 정수, 부동 소수점 숫자(길이 제약)

const int = 12345;
const float = 1.2345
console.log('4. ' + typeof int);
console.log('4. ' + typeof float);


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

let bigInt = 123n;
console.log('5. ' + typeof bigInt);


// 6. 참(true, yes) 또는 거짓(false, no)

let isTrue = false;
console.log('6. ' + typeof isTrue);


// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

let book = {
  name: 'Harry Potter',
  author: 'J.K Rowling'
}
console.log('7. ' + typeof book);


// 8. 고유한 식별자(unique identifier)

const uuid = Symbol('uuid');
console.log('8. ' + typeof uuid);


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object

// Array

// function

// this


