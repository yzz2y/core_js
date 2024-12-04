
// 숫자만 담을 수 있는 배열

let numArray1: number[] = [1, 2, 3];
let numArray2: Array<number> = [1, 2, 3];



// 문자만 담을 수 있는 배열

let strArray1: string[] = ['hello', 'world'];
let strArray2: Array<string> = ['hello', 'world'];



// 다양한 타입을 포함할 수 있는 배열 (튜플 아님)

let mixedArray: (number | string)[] = ['hello', 1];



// 숫자만 담을 수 있는 배열 (튜플로 정의)

let matrix: [number, number, number][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

