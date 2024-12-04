

/* ⭐⭐⭐⭐⭐ generic type ⭐⭐⭐⭐⭐ */

function sumFunc<T>(value: T): T { // 타입 별칭 선언(보통 T)
  return value;
}


const a = sumFunc(10); // 입력값 10이 <T>(generic type)에 들어감 -> 입력값의 타입 분석(number) -> number가 value: T의 T에 들어감
const b = sumFunc('hello');


/*

  T: Type
  U: Unknown of Unique
  K: Key
  V: Value
  E: Element
  R: Return;

*/


function swapAtoB<T,U>(a: T,b: U): (T  |U)[] {
  return [b, a];
}

swapAtoB(1, true); // [true, 1]



function getLength<T extends {length: number}>(data: T) {
  return data.length;
}

// 제대로 data.length가 반환됨
const b1 = getLength([1, 2, 3]);

// generic type을 그냥 받지 않고 length라는 속성이 있는 값으로 확장(extend)시켜 받음
const b2 = getLength('hi');
const b3 = getLength({name: 'tiger', length: 3});