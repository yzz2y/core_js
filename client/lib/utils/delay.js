// import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';
// import { xhrPromise } from './xhr.js';
// import { insertLast } from '../dom/insert.js';

// function delay(callback, timeout = 1000) {
//   setTimeout(callback, timeout);
// }



// const first = getNode('.first');
// const second = getNode('.second');



// // delay(() => {
// //   first.style.top = '-100px';
// //   second.style.top = '100px';

// //   delay(() => {
// //     first.style.transform = 'rotate(360deg)';
// //     second.style.transform = 'rotate(360deg)';

// //     delay(() => {
// //       first.style.top = '0px';
// //       second.style.top = '0px';
// //     })
// //   })
// // })







// const shouldRejected = false;

// // 생성자 함수로 promise 객체 생성
// const p = new Promise((성공, 실패) => { // 2개의 콜백 받음
//   if (!shouldRejected) {
//     성공('성공');
//   } else {
//     실패('실패');
//   }
// }) // 둘 중 하나만 실행할 수 있음

// // promise 객체에는 then을 쓸 수 있음
// p.then((res) => { // 콜백 2개 받을 수 있지만 보통 1개만 씀
//   // console.log(res); // then을 통해 result에 접근 가능해짐
  
// })






// // promise 객체를 반환하는 함수 => 재사용 위해

const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000
}


export function delayP(options) {

  let config = {...defaultOptions};


  if (isNumber(options)) {
    config.timeout = options;
  }


  if (isObject(options)) {
    config = [...defaultOptions, ...options];
  }

  

  const {shouldRejected, data, errorMessage, timeout} = config;


  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve('성공');
      } else {
        reject('실패');
      }
    }, timeout);
  });

}


// delayP();


// // delayP(false)
// //   .then((res) => {

// //     first.style.top = '-100px';
// //     return delayP(false);
// //   })
// //   .then((res) => {

// //     first.style.transform = 'rotate(360deg)';
// //     return delayP(false);
// //   })
// //   .then((res) => {
    
// //     first.style.top = '0px';
// //     return delayP(false);
// //   });











// async function d() {
//   return 1;
// }

// const _d = d();

// // console.log(_d); // async 함수 -> 무조건 promise 객체 반환


// // await 기능
// // 1. 코드 실행 흐름 제어
// // 2. result 꺼내오기

// async function delayA() {
//   const p = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('성공');
//     }, 2000);
//   })

//   const result = await p;

//   return result;
// }

// console.log(delayA());



// async function 라면끓이기() {

//   // await 사용
//   const a = await delayP({data:'물'})
//   console.log(a);
  
//   const b = await delayP({data:'스프'})
//   console.log(b);

//   const c = await delayP({data:'면'})
//   console.log(c);

//   const d = await delayP({data:'계란'})
//   console.log(d);

//   const e = await delayP({data:'그릇'})
//   console.log(e);

//   // then 사용
//   // delayP({data:'물'}).then((res) => {
//   //   console.log(res);

//   //   return delayP({data:'스프'})
//   // })
//   // .then((res) => {
//   //   console.log(res);

//   //   return delayP({data:'면'})
//   // })
//   // .then((res) => {
//   //   console.log(res);

//   //   return delayP({data:'계란'})
//   // })
//   // .then((res) => {
//   //   console.log(res);

//   //   return delayP({data:'그릇'})
//   // })
//   // .then((res) => {
//   //   console.log(res);

//   //   return res;
//   // });
  
// }

// // 라면끓이기();





// async function getData() {
//   const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/813')
  
//   insertLast(document.body,`<img src="${data.sprites.other.showdown['front_default']}" alt="" />`);

//   // .then((res)=>{
//   //   console.log( res );
  
//   //   insertLast(document.body,`<img src="${res.sprites.other.showdown['front_default']}" alt="" />`);
    
//   // })
// }

// getData();