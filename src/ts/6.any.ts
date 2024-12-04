
/* any type */

let obj;

// 아무거나 넣어도 됨
obj = {x: 10};
obj = 123;
obj = () => {};
obj.toUpperCase();



/* unknown */

let arr: unknown;

arr = 1;
arr = 'hello';

// 타입 좁히기/정제(narrowing) -> 들어오는 값이 뭔지 모를 때(보통 unknown일 때) 사용
if (typeof arr === 'number') {
  arr.toFixed();
}