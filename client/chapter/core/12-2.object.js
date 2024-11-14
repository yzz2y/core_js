/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text = message; // 원시값 복사 -> 참조 복사가 일어나지 않음 (다른 메모리 주소에 독립적으로 존재)
let conversationTool = messenger; // 객체 복사 -> 참조 복사가 일어남


// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);


// 객체 복사
// 1. for ~ in 문을 사용한 복사 (얕은 복사)

const cloneObject = {}; // (복사를 위한) 빈 객체 생성

for (const key in messenger) {
  cloneObject[key] = messenger[key];
}


// 2. Object.assign()을 사용한 복사 (얕은 복사)

const copyObject = Object.assign({}, messenger);


// 3. 전개 연산자(...)를 사용한 복사

const spreadObject = {...messenger}; // 객체를 전개해서 새로운 객체에 복사


// 4. 객체를 복사해주는 유틸 함수 

// const copiedObject = (obj) => {
//   return Object.assign({}, obj);
// }

const copiedObject = obj => Object.assign({}, obj) // 축약형


const newObject = copiedObject(messenger);




// Object mixin pattern
// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

// 1. Object.assign() 사용
// let combinedCssMap = Object.assign({}, cssMapA, cssMapB); // 뒤의 값으로 덮어쓰기됨 -> 기본값을 넣고싶으면 뒤 말고 앞에 넣기

// 2. 전개 연산자 사용
let combinedCssMap = {...cssMapA, ...cssMapB};





// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

// let copiedContainerStyles = {...containerStyles}; // 전개 연산자로 얕은 복사

let copiedContainerStyles = {
  ...containerStyles,
  ['max-width']:{
    ...containerStyles['max-width']
  }
}; // 깊은 복사 -> 코드 길어지면 가독성 떨어짐


// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

let clone_deep_object = cloneDeep(containerStyles); // 함수 사용한 깊은 복사


// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js





// 객체 합성

// 전역 상태 관리
const defaultOptions = {
  url: 'www.naver.com',
  method: 'GET',
  headers: {
    'content': 'application.json',
    'access': '*'
  }
}; // 객체로 따로 빼놓기

const theme = {
  mode: 'light'
}

function 서버와통신(options) {

  // 입력된 객체의 속성과 defaultOptions의 속성을 복사해서 합친 객체 (입력된 객체를 defaultOptions에 덮어쓰도록 뒤에 쓰기)
  // 얕은 복사 -> headers 안의 내용은 참조복사됨
  // const config = {...defaultOptions, ...options};

  const {method, url} = {
    ...defaultOptions,
    ...options,
    header:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }

}

서버와통신({
  url: 'www.daum.net',
  method: 'DELETE'
});