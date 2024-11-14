/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  // getFullName() {
  //   return `${this.brand}, ${this.maker}`;
  // },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

portableFan && portableFan.photos && portableFan.photos.animate; // 두번째가 undefined -> 두번째 반환하고 끝



// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

portableFan.photos?.animate;



// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

const fullName = portableFan.getFullName?.();

console.log(fullName);




// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.





// sync(동기) async(비동기)
// 일반적으로 자바스크립트는 동기적으로 작업을 수행함 (-> 콜스택이 비워지기 전까지 다른 작업을 수행하지 않음)


// 비동기적으로 태그 만들고 싶을 때

const button = document.querySelector('.my-button'); // 동적으로 my-button을 가져올 수 없음 => 에러


const t = setTimeout(() => {
  
  const tag = `<button type="button" class="my-button">BTN</button>`;

  document.body.insertAdjacentElement('beforeeend', tag);

  // 서버에서 데이터 요청이 끝난 후에 다음 일을 실행하도록 -> 'promise'

}, 5000); // 5초 뒤에 my-button이 생성되도록 함


button?.addEventListener('click', () => {
  console.log('clicked!');
  
}); // 옵셔널 체이닝으로 button이 null이나 undefined일 때는 addEventListener를 실행하지 않음




let count = 0;

setInterval(() => {
  
  document.querySelector('.second').computedStyleMap.tranform = `translateY(${++count}px) rotate(${++count}deg)`;
  
}, 1000)



function animation() {

  document.querySelector('.second');

}