/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log(AandB);


// Locical AND Assignment
// a &&= b // a = a && b



// 논리합(또는) 연산자
let AorB = a || b;

console.log(AorB);


// Logical OR Assignment
// a ||= b; // a = a || b



// 부정 연산자
let reverseValue = value;

console.log(!reverseValue);



// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || {thisIsTruthy:true};


console.clear();

// 로그인 문제

let user = prompt("누구세요?");

// esc를 누르거나 아무것도 입력하지 않을 경우 처리(함수일 때)
// if(user === null || user === undefined) return
// if(!user) return

// 추가조건: 대소문자 구분 X
if (user?.toLowerCase() === "admin") {

  let password = prompt("비밀번호?");

  if (password.toUpperCase === "THEMASTER") {
    alert("환영합니다!");

  } else if (password === null) {
    alert("취소되었습니다.");

  } else {
    alert("인증에 실패하였습니다.");

  }

} else if (user === null || user.replace(/\s*/g, '') === '') {
  alert("취소되었습니다.");

} else {
  alert("누군지 모르겠어요");

}
