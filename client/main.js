// import {$, $s} from './lib/dom/$.js';
// import {insertLast} from './lib/dom/insert.js';
// import clearContents from './lib/dom/clearContents.js';

import {
  getNode as $,
  clearContents,
  insertLast,
} from './lib/index.js';




function phase1() {
  // 숫자랑 숫자 넣으면 자동으로 합이 계산되어 나오도록
  // clear -> 다 없어지도록

  // 1. input 선택하기
  // 2. input 이벤트 바인딩
  // 3. input의 value 값 가져오기
  // 4. 숫자 더하기
  // 5. result에 출력하기


  const firstInput = $('#firstNumber');
  const secondInput = $('#secondNumber');
  const clear = $('#clear');
  const result = $('.result');



  function handleInput() {
    const firstValue = +firstInput.value;
    const secondValue = +secondInput.value;

    result.textContent = firstValue + secondValue;
  }

  function handleClear(e) {
    e.preventDefault();

    clearContents(firstInput);
    clearContents(secondInput);
    result.textContent = '-';
  }



  firstInput.addEventListener('input', handleInput);
  secondInput.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}



// 이벤트 위임 이용
function phase2() {
  const calculator = $('.calculator'); // 이벤트 위임을 위해 firstInput과 secondInput의 '부모'인 form 태그 선택
  const result = $('.result');
  const clear = $('#clear');

  const numberInputs = [...document.querySelectorAll('input:not(#clear)')]; // 두 input을 유사배열처럼 관리하기 위해 (버튼도 input이어서 버튼은 제외)


  function handleInput() {
    const total = numberInputs.reduce((acc, cur) => {acc + Number(cur.value)}, 0); // input으로 들어온 값은 문자열 -> 숫자로 변환 필요

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();

    // numberInputs.forEach((input) => {clearContents(input)});
    numberInputs.forEach((clearContents)); // input이 중복되면 인자로 함수 넣어주기 가능

    result.textContent = '-';
  }


  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}


phase2(); // 실행부
