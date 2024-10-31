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

const double = 'hello world'; // string literal(값)
const single = 'hello world';
const backtick = `인도의 ${double / 30} 이 맛있다.`;

const str = new String('hello'); // string constructor function(생성자 함수)

console.log('3. ' + typeof double);
console.log('3. ' + typeof single);
console.log('3. ' + typeof backtick);

// 4. 정수, 부동 소수점 숫자(길이 제약)

const int = 12345; // number literal
const float = 1.2345;

const num = new Number(23); // number constructor function

console.log('4. ' + typeof int);
console.log('4. ' + typeof float);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 123n;

console.log('5. ' + typeof bigInt);

// 6. 참(true, yes) 또는 거짓(false, no)

const isTrue = false;

const bool = new Boolean(true);

console.log('6. ' + typeof isTrue);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const book = {
  name: 'Harry Potter',
  author: 'J.K Rowling',
};

const obj = new Object();

console.log('7. ' + typeof book);

// 8. 고유한 식별자(unique identifier)

const uuid = Symbol('uuid');
const uuid2 = Symbol('uuid');

console.log('8. ' + typeof uuid);

console.log(uuid === uuid2);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류



// Object

// 객체에 메서드를 정의하는 방법

// 1. normal function(일반 함수)
// 2. arrow function(화살표 함수)
// 3. concise method(축약된 메서드)


// this: 나를 호출한 대상


// arrow function은 this를 바인딩하지 않음 (상위 컨텍스트(아래의 경우: 전역)에서 this를 찾음)


// 객체에 메서드를 정의할 때 => concise method 사용 권장
// 메서드 안에서 함수를 정의해야 할 때 => arrow function 사용 권장
// 이유는 this를 찾기 위해서

const user = {
  name: 'tiger',
  age: 42,
  sayHi: function () {
    console.log(this);
  },
  sayHi2: () => {
    console.log(this);
  },
  sayHi3() {
    const sayBye = () => {
      console.log((this.age = 30));

      sayBye();
    };
  },
};



// Array

const arr = ['a', { name: 'tiger' }, () => {}, 4, 5];

console.log(arr);

const newArray = new Array(); // 배열도 생성자 함수로 만들 수 있음

console.log(newArray);



// function

function sum(a, b) {
  // a, b -> parameter
  return a + b;
}

const result = sum(1, 2); // 1, 2 -> arguments

console.log(result);


function 붕어빵틀(재료) {
  return '${재료} 붕어빵';
}

const 팥붕 = 붕어빵틀('팥');
const 슈붕 = 붕어빵틀('슈크림');



// this
