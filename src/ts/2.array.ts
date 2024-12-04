
/* Array Type */
let arr: number[] = [1, 2, 3];
let str: string[] = ['a', 'b', 'c'];



/* genetric type 타입 변수 => 함수 */
let _arr: Array<number> = [1, 2, 3];
let _str: Array<string> = ['a', 'b', 'c'];

// union type + array type
let multi: (string | number | boolean)[] = ['hello', 10, false];



/* Tuple Type */
/*
 길이 고정됨 -> 배열처럼 길이 동적으로 변경되지 않음
 자리의 타입이 정해져있음
*/
let tupleA: [number, number] = [1, 2];
let person: [string, number] = ['tiger', 30];

// 다차원 배열 + tuple type
const user: [string, number][] = [
  ['심선범', 30],
  ['신석범', 35],
  ['신선범', 13]
];