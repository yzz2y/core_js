/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  // hasOwnProperty() { --> concise 메서드
  //   return '안녕';
  // }
};

// Object: 찐 조상

// object: Object가 만든 객체
// String
// Array
// function

'toString' in javaScript // true (in 연산자는 조상까지 올라감)

Object.prototype.nickNAme = 'tiger' // 조상 오염시키기 가능 -> 위험함






// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has) 있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty('toString')); // hasOwnProperty를 그냥 쓰면 경고 뜸 (객체에 hasOwnProperty라는 concise 메서드를 추가할 경우 override가 되기 때문 -> 위험함)

// 안전한 방법
// (prototype -> 조상의 능력/메서드)
console.log(Object.prototype.hasOwnProperty.call(javaScript, 'creator')); // 조상의 hasOwnProperty를 가져다/빌려다(call) 쓰기

// 편한 방법
console.log(Object.hasOwn(javaScript, 'nickName')); // 객체가 가진 hasOWn 메서드 바로 쓰기




// for ~ in 문 (객체에 속성이 많을 경우 in을 하나하나 다 쓰기 힘들기 때문 -> 반복문 필요)


// - 객체 자신의 속성만 순환하려면?

for (const key in javaScript) {

  console.log(key); // 객체의 key 조회
  console.log(javaScript[key]); // 객체의 value 조회
  
}

// 오염되었을 경우 (value 조회) -> hasOwn 사용
for (const key in javaScript) {

  if (Object.hasOwn(javaScript, key)) {

    const value = javaScript[key];

    console.log(value);
    
  }

}



// - 배열 객체 순환에 사용할 경우?

// 배열도 for ~ in문으로 순환 가능 (but 배열은 순서가 중요 -> for ~ in으로 순환할 경우 순서를 보장하지 못함)
// for ~ in은 객체 순환에 사용하는 것이 적절함

const tens = [10, 100, 1000, 10_000];

for (const key in tens) {

  // console.log(tens[key]);
  
}






const obj = {};

Object.defineProperty(obj, 'age', {
  value: 30,
  enumerable: true,
  writable: false,
  configurable: false
})

Object.defineProperties(obj, {
  age: {
    value: 30,
    enumerable: true,
    writable: false,
    configurable: false
  }, 
  email: {

  }
})