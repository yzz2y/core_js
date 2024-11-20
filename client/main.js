import {
  memo,
  getNode,
  getNodes,
  diceAnimation,
  insertLast,
  attr,
  endScroll,
  clearContents,
} from "./lib/index.js";



// [주사위 굴리기 버튼을 누르면 주사위가]
// 1. 주사위 굴리기 버튼을 선택하기
// 2. 클릭 이벤트 바인딩 


// [애니메이션이 될 수 있도록 만들어 주세요]
// 1. setInterval
// 2. diceAnimation()



// [같은 버튼 눌렀을 때 ]
// 1. 상태 변수 true | false
// 2. 조건 처리 

// [애니메이션이 재생 or 정지] 
// 1. setInterval
// 2. clearInterval ( scope )



// [기록 버튼을 누르면] 
// recordButton에 클릭 이벤트 바인딩

// [table이 등장] 
// recordListWrapper에 hidden 속성 제어하기



// [table 안쪽에 tr 태그 렌더링] 
// 1. 태그 만들기
// 2. insertLast 함수 사용하기 (tbody 안쪽에 렌더링)

// [table 안쪽에 tr 태그에 데이터를 넣고 렌더링] 
// 
// 



// [Item의 갯수가 많아짐에 따라 스크롤을 제일 하단으로 올 수 있도록] 
// 
// 

// [reset 버튼을 눌렀을 때 모든 항목 초기화] 
// 
// 


{/* <tr>
  <td>0</td>
  <td>5</td>
  <td>5</td>
</tr> */}


const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button'); // 유사배열 -> 구조분해할당 가능
const recordListWrapper = getNode('.recordListWrapper');

let count = 1; // 회차
let total = 0; // 주사위 눈 총합



function createItem(value) {
  return `
    <tr>
      <td>${count++}</td>
      <td>${value}</td>
      <td>${total += value}</td>
    </tr>
  `;
}


function renderRecordItem() {

  // const diceNum = +attr(getNode('#cube'), 'dice');
  const diceNum = memo('cube').getAttribute('dice');

  insertLast('tbody', createItem(diceNum));

}




const handleRollingDice = (() => {
  
  let isClicked = false;
  let stopAnimation;

  return () => { // isClicked, stopAnimation 변수 보호 위해 클로저 생성
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 200);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
  
    isClicked = !isClicked; // 토글
  }

})(); // 함수 본문을 리턴하기 때문에 addEventListener 줄에서 다시 실행해줘야함 -> 즉시실행함수(IIFE) 만들면 그러지 않아도 됨


const handleRecord = () => {
  recordListWrapper.hidden = false;

  renderRecordItem();

  endScroll(recordListWrapper);
}


const handleReset = () => {
  recordListWrapper.hidden = true;

  clearContents('tbody');

  count = 1;
  total = 0;
}



rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
