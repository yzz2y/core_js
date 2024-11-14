/* ---------------------------- */
/* Functions → Declaration      */
/* ---------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);



// 함수 선언

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}


function calcPrice(
  priceA, 
  priceB = getRandomValue(),
  priceC = getRandomValue(), 
  priceD = getRandomValue()
) {

  // if (priceD === undefined) priceD = 0;
  // if (!priceD) priceD = 0;
  // priceD = priceD || 0;
  // priceD ||= 0;
  // priceD ??= 100;

  // validation
  if (!priceA) throw new Error('calcPrice 함수는 1개 이상의 매개변수를 설정해야 합니다.');

  return priceA + priceB + priceC + priceD;

}


// 함수 호출

// const result = calcPrice();

// console.log(result);


// 함수 값 반환


// 매개 변수


// 매개 변수 (parameter) vs. 전달 인수 (argument)


// 외부(전역 포함), 지역 변수


// 매개 변수 기본 값


// 좋은 함수 작성 여건

// 1. 하나의 기능만을 수행하는 함수
// 2. 재사용성이 좋은 함수
// 3. 이름을 잘 지은 함수 (가독성 -> 읽었을 때 바로 기능을 알 수 있도록)
// 4. 인수가 적은 함수 (4 ~ 5개 사이)



/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
// let rem;

function rem(pxValue, base = 16) {

  // validation
  if (!pxValue) throw new Error('rem 함수의 첫 번째 인수는 필수 입력값 입니다.');
  if (typeof base === 'string') throw new TypeError('rem 함수의 두 번째 인수는 숫자 타입이어야 합니다.');
  if (typeof pxValue === 'string') pxValue = parseInt(pxValue, 10);

  let result = pxValue / base + 'rem';

  return result;

}

// console.assert(rem(20) === '1.25rem');
// console.assert(rem('25px')  === '1.5625rem');
// console.assert(rem('30px',10) === '3rem');



// css(node: string, prop: string, value: number|string) : string;
// let css;

const first = document.querySelector('.first');

// 스타일링 설정하는 함수(setter 함수)
function setCss(node, prop, value) {

  // 이미 만들어진 노드도 받을 수 있도록
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  
  // validation
  if (!(prop in document.body.style)) throw new TypeError('setCss 함수의 두 번째 인수는 유효한 css 속성이어야 합니다.');
  if (!value) throw new Error('setCss 함수의 세 번째 인수는 필수 입력값 입니다.');

  node.style[prop] = value;

}

// setCss('.first', 'background', 'dodgerblue');

// 스타일링 가져오는 함수(getter 함수)
function getCss(node, prop) {

  // 이미 만들어진 노드도 받을 수 있도록
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  
  // validation
  if (!(prop in document.body.style)) 
    {throw new TypeError('getCss 함수의 두 번째 인수는 유효한 css 속성이어야 합니다.');
  }

  return getComputedStyle(node)[prop];

}

// const fontSize = getCss('.first', 'font-size');

// console.log(fontSize);


// getter, setter 통합 함수
function css(node, prop, value) {

  // if(!value) {
  //   // getter
  //   return getCss(node, prop);

  // } else {
  //   //setter
  //   return setCss(node, prop, value);

  // }

  return !value ? getCss(node, prop) : setCss(node, prop, value);

}

// 화살표 함수
const _css = (node, prop, value) => !value ? getCss(node, prop) : setCss(node, prop, value);


css('.first', 'color'); // getter

css('.first', 'color', 'red'); // setter





/*
1. function name
2. arguments (함수 실행부)
3. parameter
4. return value
5. validation
6. Test Driven Development (TDD)
*/



// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.






// ----


