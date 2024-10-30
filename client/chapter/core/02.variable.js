/* ------------------ */
/* Variables          */
/* ------------------ */

console.log('variable');

let admin;
let name;

name = 'John';

admin = name;

alert(admin);

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
// - 구매 제품 가격의 총 합
// - 1년 기준 일(day)자 수
// - 구매 결제 여부
// - 구매 결제 내역
// - 브랜드 접두사
// - 오늘의 운세
// - 상품 정보

/* variables ----------------------------------------------------------- */

// 갯수 별 상품 가격 계산:
let calcProductPriceQuantity;

// 구매 제품 가격의 총 합: totalPrice
let totalProductPrice;

// 구매 결제 여부: willBuy
let isPayment = true;
let hasCartPayment = false;

// 구매 결제 내역:
let paymentList;

// 오늘의 운세: dailyFortune
let fortuneToday = 'so good';

/* constant variables -------------------------------------------------- */

// 1년 기준 일(day)자 수: DAYS
const DAY_PER_YEAR = 365;

// 브랜드 접두사:
const BRAND_PREFIX = 'Stussy';

// 상품 정보: PRODUCT-INFO
const product_info = '...';
