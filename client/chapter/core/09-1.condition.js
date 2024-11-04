/* ---------------- */
/* Condition        */
/* ---------------- */

// let userAnswer = prompt("자바스크립트의 '공식'이름은 무엇일까요?"); // 사용자 입력 데이터를 변수에 저장

// if (userAnswer == "ECMAScript") {
//   console.log("정답입니다!");
// } else {
//   console.log("모르셨나요? 정답은 ECMAScript입니다!");
// }



// let num = +prompt("숫자를 입력하세요");

// if (typeof num != num) {
//   alert("숫자를 입력하세요!");
// }

// if (num > 0) {
//   console.log(1);
// } else if (num < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }



// let a = 1;
// let b = 5;

// let result = (a + b < 4) ? '미만' : '이상';



// let login;

// let message = (login == '직원') ? '안녕하세요.' :
//               (login == '임원') ? '환영합니다.' :
//               (login == '') ? '로그인이 필요합니다.' :
//               '';



// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'no';

// 영화 볼거니?
let goingToWatchMovie = 'yes';


const msg = didWatchMovie.includes('yes') ? '그래 ㅋ' :
            goingToWatchMovie.includes('yes') ? '언제 볼래?' :
            '그래 ㅋ';






// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식


function render(node, isActive){

  // 조건부 랜더링 
  let template = `
    <div>${ isActive ? '안녕' : '잘가' }</div>
  `

  node.insertAdjacentHTML('beforeend',template);
}