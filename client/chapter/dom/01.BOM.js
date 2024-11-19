/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window; // 구조분해할당


/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location; // 구조분해할당 (window.location)

// href: http://localhost:5500/index.html?type=listing&page=2#title
// protocol: http:
// host: localhost:5500
// port: 5500
// search: ?type=listing&page=2 // params (백엔드에게 넘어가는 데이터)
// hash: #title


const urlParams = new URLSearchParams(location.search); // iterator 내장 -> 순환 가능

// for (const [key, value] of urlParams) { // 유사배열 -> 구조분해할당 가능
//   console.log(`${key}:${value}`);
// }

// console.log(urlParams.get('type')); // '=' 옆의 값 얻어오기 ex) 쇼핑몰 페이지에서 상품 정보 가져오기, ...

// useParams()


/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator; // 구조분해할당 (window.navigator)


// callback 방식

// function getGeolocation(success) {

//   let obj;

//   navigator.geolocation.getCurrentPosition((data) => {

//     const {latitude:lat, longitude:long} = data.coords; // 객체 구조분해

//     success({lat, long}); // 위도, 경도 담은 객체를 success 함수에 담기

//   }); // 정보 가져오는데 시간 걸림 -> 그냥 반환하면 값이 담기기도 전에 반환됨 => callback 사용해야함

//   return obj;

// }

// const geo = getGeolocation((data) => {

//   console.log(data);

// });



// Promise 방식

// function getGeolocation(success){

//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition((data)=>{
//       const {latitude:lat, longitude:long} = data.coords;
//       resolve({ lat, long })
      
//     });
//   });
  
// }

// getGeolocation()
// .then((data)=>{
//   console.log( data );
  
// });




// navigator.mediaDevices.getUserMedia({video:true})
// .then((stream) => {
//   console.log(stream);
//   document.querySelector('#videoElement').srcObject = stream;
// });




/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen; // 구조분해할당 (window.screen)





/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history; // 구조분해할당 (window.history)

// jQuery -> SPA가 제공되지 않음 => 사용 줄어드는 추세

// SPA(Single Page Application): 각각의 페이지를 유연하게 어플리케이션처럼 관리하는 것

// SSG