/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 'user@company.io' : emailAddress;


// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';


/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const isActive = false;


console.log(0 || WIDTH); // WIDTH
console.log(0 ?? WIDTH); // 0

console.log(undefined || WIDTH); // WIDTH
console.log(undefined ?? WIDTH); // WIDTH

console.log(isActive || WIDTH); // WIDTH
console.log(isActive ?? WIDTH); // false

console.log('' || WIDTH); // WIDTH
console.log('' ?? WIDTH); // ''



// a ||= b: a가 false일 때 b의 값을 a에 할당 (a = a || b)
// a &&= b: a가 true일 때 b의 값을 a에 할당 (a = a && b)
// a ??= b: a가 undefined/null일 때 b의 값을 a에 할당 (a = a ?? b)



console.clear();

// 온라인 쇼핑몰의 구매 기능 구현

// 1. 사용자 (user) 상태
// - 회원 / 비회원
// - 회원 => 일반 / 프리미엄

// 2. 할인 규칙
// - 모든 사용자(회원, 비회원): 첫 구매 시 5% 할인 적용
// - 일반 회원: 두 번째 구매부터 10% 할인 (-> 첫 구매: 5%)
// - 프리미엄 회원: 항상 20% 할인 (-> 첫 구매: 25%)
// - 비회원: 두 번째 구매부터 할인 받을 수 없음 (-> 첫 구매: 5%)

// 3. 추가 조건
// - 구매 금액이 2만원 이상일 경우: 추가로 5% 할인 부여


// 함수
function discountPrice(userState, count, price) {

  let discountRate = 0;
  let totalPrice;

  if (count === 1) discountRate += 5;

  if (userState === '비회원' && count > 1) {

    discountRate += 0;

  }

  if (userState === '일반 회원' && count > 1) {

    discountRate = 10;

  }

  if (userState === '프리미엄 회원') {

    discountRate += 20;

  }

  if (price >= 20000) discountRate += 5;

  totalPrice = price * ((100 - discountRate) / 100);

  return totalPrice;

}

// 함수 실행부
// console.log(discountPrice('프리미엄 회원', 1, 23500));