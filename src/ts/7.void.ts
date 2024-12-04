
/* void type */

function sayHi(): string { // 함수의 리턴값을 문자열로 명시
  return 'hello';
}

function printHi(): void { // 아무것도 하지 않는 함수임을 보여주기 위해 void 명시 (리턴값이 없는 함수)
  console.log('hello');
}



/* never type */

// 존재하지 않는 / 불가능한 / 어떤 값도 정의할 수 없는 타입

function showError(message: string): never { // 매개변수 타입 명시해줘야함
  throw new Error(message);
}

showError('해당 함수는 에러가 발생했습니다.');


function loop(): never {
  while(true) {
    // ...
  }
}

// generator 함수는 실행되면 객체를 내보내기 때문에 never type 아님
function* gen(): Generator<number, void, void> {
  let count = 0;
  while (true) {
    yield ++ count;
  }
}

/*
  Generator<T, R, P>
  T: yield 함수
*/