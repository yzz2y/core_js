/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

// let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// rest parameter: 나머지 연산자

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {

  // console.log(arguments);

  console.log(rest);


  // 총합 계산
  let total = 0;

  // 1. for문
  for (let i = 0; i < rest.length; i++) total += rest[i];

  // 2. for..of문
  for (const value of rest) total += value;

  // 3. forEach
  rest.forEach(function(price) {
    total += price;
  })
  // 3-1. forEach arrow function
  rest.forEach (price => {total += price;}) 

  // 4. reduce
  rest.reduce(function(acc, cur) {
  
    return acc + cur;
      
  }, 0)
  // 4-1. reduce arrow function
  rest.reduce((acc, cur) => acc + cur, 0)


  return total;
  
};

let _calcAllMoney = (...rest) => rest.reduce((acc, cur) => acc + cur, 0);

const result = calcAllMoney(10000, 30000, 50000);

console.log(result);




// 화살표 함수와 this

// Arrow function은 this를 바인딩하지 않음 (this를 가지지 않음)
// this -> 실행 환경(context)에 따라 달라짐 (화살표 함수)
// this -> 나를 호출한 대상에 따라 달라짐 (일반 함수)

// 전역 실행 환경
console.log(this); // window / globalThis

// 일반 함수
function a () {
  console.log(this); // window
}

a();

// 화살표 함수
const b = () => {
  console.log(this); // 
}



// 자바스크립트의 함수 -> 양면의 얼굴
// 일반 함수 (normal function) -> 화살표 함수로 작성
// 생성자 함수 (constructor function) (대문자로 시작하는 것이 관례) -> class 문법 사용하여 작성

// function Button (text, state) => {

//   this.content = text;
//   this.state = state;

// }

// 일반 함수
// 생성자 함수를 일반 함수처럼 사용할 때의 this -> window
// const _a = Button();

// 생성자 함수
// 생성자 함수의 this -> 생성자 함수를 통해 생성한 인스턴스
// const __a = new Button('more', 'default');
// const search = new Button('search', 'hover');


// class Button {

//   constructor()

// }



// 일반 함수
// - constructor 내장 (concise method 예외)
// - this: 나를 호출한 대상
// - 객체의 메서드로 많이 사용됨 -> this를 찾기 위해


// 화살표 함수
// - constructor 내장 X (성능 최적화를 위해)
// - this: 바인딩 하지 않음 -> 상위 컨텍스트에서 찾음
// - 메서드 안의 함수를 작성해야 하는 경우 주로 사용됨 -> 나의 상위 this를 찾기 위해

console.clear();

const user = {
  name: '홍길동',
  total: 0,
  grades: [50, 70, 40],
  totalGrades() {

    // 화살표 함수
    this.grades.forEach((g) => {

      this.total += g;
      
    })

    // 화살표 함수 축약형
    // this.grades.forEach(g => this.total += g);

    // 화살표 함수 축약형 + reduce 값을 바로 내보냄
    // this.grades.reduce((acc, cur) => acc + cur);

    return this.total;

  }
}


console.log(user.totalGrades());




console.clear();

/* 다음 함수를 작성해봅니다.
-------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;

// 1. for문
// let pow = (numeric, powerCount) => {

//   let result = 1;

//   for (let i = 0; i < powerCount; i++) result *= numeric;

//   return result;

// };


// 2. 배열 만들어서 길이만큼 돌기
// let pow = (numeric, powerCount) => {

//   let result = 1;

//   Array(powerCount).fill(null).forEach(() => {

//     result *= numeric;

//   })

//   return result;

// }

// 2-1. 배열 만들어서 길이만큼 돌기 - reduce
// let pow = (numeric,powerCount) => {

//   return Array(powerCount).fill(null).reduce((acc,cur)=>{

//     return acc * numeric;

//   })

// };

// let pow = (numeric,powerCount) => {

//   return Array(powerCount).fill(numeric).reduce((acc,cur)=>{

//     return acc * cur;

//   })

// };

// 2-1-1. reduce 축약형
let pow = (numeric, powerCount) => {return Array(powerCount).fill(null).reduce(acc => {return acc * numeric;})};





// repeat(text: string, repeatCount: number): string;

// 1. for문
// let repeat = (text, repeatCount) => {

//   let result = "";

//   for (let i = 0; i < repeatCount; i++) result += text;

//   return result;

// };


// 2. 배열로 만들어서 길이만큼 돌기 - reduce
// let repeat = (text, repeatCount) => {

//   return Array(repeatCount).fill(null).reduce((acc)=>{

//     return acc + text;

//   }, "");

// };

// 2-1. reduce 축약형
let repeat = (text,repeatCount) => Array(repeatCount).fill(null).reduce((acc) => acc + text,'');
