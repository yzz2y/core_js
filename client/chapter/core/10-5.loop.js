/* --------------- */
/* For Of Loop     */
/* --------------- */




// enumerable: 열거 가능한(= 열어서 확인 가능한)
// iterable  : 반복 가능한
// mutable   : 수정/변경 가능한 (리액트의 데이터는 대부분이 immutable -> immutable한 데이터를 mutable하게 바꿔야함)

// for ... of: iterable한 요소만 사용 가능


// 배열 -> iterable

// 배열 특징
// 1. 순서(index)가 있음
// 2. 길이(length)가 있음


// 유사배열(arrayLike): 배열처럼 생겼지만 배열이 아닌 것 -> 콘솔 창에서 열어서 (배열인지 아닌지) 확인
// iterable하지 않음 (Symbol에 iterator가 있어야 iterable한 객체)
const arrayLike = {

}


// for ... in -> 배열 순환에 사용 X (순서 보장 X)
// for ... of -> 배열 순환에 사용 (순서 보장 O)






const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];


// for ~ of 문


// - 특정 조건에서 건너뛰기

// 1. name 조회
// 2. 포함 여부 확인 (str.includes())
// 3. if문 작성
// 4. continue 지시자 사용

for (const value of languages) {

  // console.table(value);

  const name = value.name;

  if (name.includes('Java') && name.length < 5) {
    continue;
  }
  
  console.table(value);

}


// for문: 모든 데이터 순환용 -> 작성 코드가 많음 => 무한루프 여지 O
// for ...in문: 객체 순환용 -> 정해진 아이템의 개수만큼 => 배열 순환에는 사용 X
// for ...of문: iterable 요소 순환용 => 정해진 아이템의 개수만큼 => 배열 순환에 적합








console.clear();

const obj = {
  nickName: 'tiger',
  age: 40
}

// 객체인데 for ... of문 사용하는 방법

// 1. symbol.iterator -> 귀찮은 방법
// 2. 객체를 배열로 만들기

// 객체의 정적 메서드(static method)

const keys = Object.keys(obj); // 객체의 key들을 모아 새로운 배열을 '반환'하는 유틸 함수
const values = Object.values(obj); // 객체의 value들을 모아 새로운 배열을 '반환'하는 유틸 함수
const entries = Object.entries(obj); // 객체의 key, value들을 모아 한 쌍의 배열을 이루는 새로운 배열을 '반환'하는 유틸 함수 ex) [['nickName', 'age'], ['tiger', 40]]


// console.log(entries);

// for (const entry of entries) {

//   const key = entry[0];
//   const value = entry[1];

//   console.log(value);
  
  
// }












// - 특정 조건에서 중단하기















const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// for (const value in randomUser) {

//   if (Object.hasOwn(randomUser, value)) {
    
//     const L1 = randomUser[value];

//     if (typeof L1 === 'objcet') {

//       for (Const value in L1)
//  {

//  }    }
    
//   }

// }


// 재귀함수


for(const keyValue of Object.entries(randomUser)){
  const key = keyValue[0];
  const value = keyValue[1];

  if(typeof value === 'object'){
    
    for(const keyValue of Object.entries(value)){
      const key = keyValue[0];
      const value = keyValue[1];

      if(typeof value === 'object'){
        
        for(const keyValue of Object.entries(value)){
          const key = keyValue[0];
          const value = keyValue[1];
        }
      }
    }
  }
}



// 객체의 키, 값 순환
// - for ~ in 문
// - for ~ of 문
// - 성능 비교 진단