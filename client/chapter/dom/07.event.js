/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

// function handler() {
//   console.log('안뇽');
  
// }


// 2. DOM 프로퍼티 : element.onclick = handler

// const about = getNode('.about');
// const home = getNode('.home');
// about.onclick = handler;


// 3. 메서드 : element.addEventListener(event, handler[, phase])



// about.addEventListener('click', handler);



// const remove = bindEvent(about, 'click', handler);
// home.addEventListener('click', remove);




const ground = getNode('.ground');
const ball = getNode('.ball');


function handleBall({offsetX:x, offsetY:y}) { // 구조분해할당 + alias

  // const {offsetX:x, offsetY:y} = e;
  
  // const x = e.offsetX;
  // const y = e.offsetY;

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;
  

  ball.style.transform = `translate(${x - w / 2}px, ${y - h / 2}px)`;

}


ground.addEventListener('click', handleBall);






function handleMove({offsetX:x, offsetY:y}) {

  // const w = ball.offsetWidth;
  // const h = ball.offsetHeight;

  // ball.style.transform = `translate(${x - w / 2}px, ${y - h / 2}px)`;

  const template = `
    <div class="emotion" style="top:${y}px; left:${x}px">💩</div>
  `

  insertLast(ground, template);

}








// function handle(e) {
  //   console.log(this);
  
  // }
  
// ground.addEventListener('mousemove', debounce/throttle(handle, 1000));


// debounce

function debounce(callback, limit = 500) {
  
  let timeout;

  return function(e) {
    clearTimeout(timeout);

    timeout = setTimeout(() => { // 일반 함수로 작성하면 this가 window가 됨 -> 화살표 함수로 작성하면 this를 바인딩하지 않기 때문에 상위 컨텍스트로 올라감
      callback.call(this, e); // 이벤트 객체(e)를 핸들러 함수(handle)에 전달
    }, limit);
  };

}



// throttle

function throttle(callback, limit = 500) {
  
  let wait = false;

  return function(...args) {

    if (!wait) {
  
      callback.apply(this.args);
      wait = true; // 콜백 함수 여러 번 실행해도 처음만 실행됨
      setTimeout(() => wait = false, limit); // 타이머 설정 => limit 시간 후 실행하면 실행됨 -> 반복
  
    }

  };

}









/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener