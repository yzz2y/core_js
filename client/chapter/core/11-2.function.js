/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function() {

  // arguments: 함수 안에서만 접근 가능한 인수들의 집합 객체 (-> 유사 배열, 지역 변수)

  let total = 0;

  // **유사배열 -> for문으로 순환**

  // for문
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // for ... of문
  // for (const arg of arguments) {
  //   total += arg;
  // }





  // **aruments(유사 배열) -> array(진짜 배열로) (지속적으로 진짜 배열로 써야할 때 적절)**

  // const arr = [...arguments];                        // spread syntax
  // const arr = Array.from(arguments);                 // 배열의 static method (배열 아니어도 사용 가능)
  // const arr = Array.prototype.slice.call(arguments); // 배열의 instance method (arguments는 유사배열이기 때문에 arguments.slice로 사용 불가)


  // instance method (배열의 instance method -> 배열만 쓸 수 있는 method)

  // 1. forEach: 배열 순환 method => 값 반환하지 X (순환용으로만 사용)
  // arr.forEach(function(price) {
  
  //   total += price;
  
  // })

  // 2. reduce: 배열 순환 method => 값 반환 (문자, 숫자, boolean, 배열, 객체, ...) -> return문 필수
  // total = arr.reduce(function(acc, cur) {
  
  //   return acc + cur;
    
  // }, 0);

  // 3. reduce + arrow function
  // return arr.reduce((acc, cur) => acc + cur);





  // **arguments -> 배열로 바꾸지 않고 call로 array method 빌려쓰기 (일회성 - 한 번만 필요할 때 적절)**

  // Array.prototype.forEach.call(arguments, function(price) {
  //   total += price;
    
  // })





  // **유사배열의 부모 = Object -> Array로 바꾸기**

  // 던더 proto(__proto__): 부모에 접근
  // arguments.__proto__ = Array.prototype;


  console.log(total);

};




// const obj = {
//   total:null,
//   item:[1000,2000,3000],
//   totalPrice(){
    
//     this.item.forEach((price)=>{
//       this.total += price
//     })
//   }
// }

// obj.totalPrice()



// const result = calculateTotal(10000, 30000, 45000, 2500, 30000);

// console.log(result);


// Array instance method
  // forEach: 배열 순환 => 값 반환하지 X
  // reduce : 배열 순환 => 값 반환 (문자, 숫자, boolean, 배열, 객체, ...)
  // map    : 배열 순환 => 값 반환 (*새로운 배열* -> 원본 건드리지 X)


const alphabets = ['a', 'b', 'c', 'd'];


const a = alphabets.map(function(name, index) {

  return '알파벳_' + name;
  // return `<li>이름: ${name}</li>` // 태그 만들기

})

// a.forEach(function(tag) {
//   document.body.insertAdjacentHTML('beforebegin', tag);
// }) // 만든 태그를 html에 추가

console.log(a);





// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function() {

};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {

};


// 콜백 함수 (표현)식
let callbackFunctionExpression = function (condition, success, fail) {
  
  if (condition) success();
  else fail();

};

callbackFunctionExpression(
  false,
  function() {console.log('성공입니다!')},
  function() {console.log('실패입니다!')}
);

// arrow function
callbackFunctionExpression(
  true,
  () =>  console.log('성공입니다!') ,
  () =>  console.log('실패입니다!') 
)



function movePage(url, success, fail) {

  if (url.includes('https')) {
    success(url); // 실행부
  } else {
    fail();
  }

}


movePage(
  'https://www.naver.com',
  function(url) {
    console.log(`현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`); // 선언부
  },
  function() {
    console.log('잘못된 경로를 입력하셨습니다.');
  }
)



// 콜백함수 => arrow function

movePage(
  'https://www.daum.net',
  function(url){
    
    return `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`;
    
  },
  function(){
    console.log('잘못된 경로를 입력하셨습니다.');
  }
)

// arrow function

movePage(
  'https://www.daum.net',
  url =>  `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`,
  () => console.log('잘못된 경로를 입력하셨습니다.')
)



function getGeolocation(success, fail) {

  navigator.getGeolocation.getCurrentPosition((so) => {
    const data = so.coords.latitude;
    success(data);
  })

}


getGeolocation(function(value) {
  console.log(value);
});




console.clear();


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식: 함수가 선언됨과 동시에 실행되는 것
// Immediately Invoked Function Expression
let IIFE;

// var -> 블록 스코프 X
// var -> 함수 스코프 O

// encapsulation(캡슐화)
// ex) MASTER를 통해서만 uuid에 접근할 수 있음
const MASTER = (function(g){

  var uuid = '뭐시기';

  return {
    getKey(){
      return uuid;
    },
    setKey(value){
      uuid = value;
    }
  }
  

})(window);




