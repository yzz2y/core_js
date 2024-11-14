/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray


const people = [
  {
    id: 0,
    name: 'MJ',
    age: 37,
    job: '음악하는 재미교포',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    imgAlt: '대체 텍스트입니다..'
  },
  {
    id: 1,
    name: '이성우',
    age: 13,
    job: '모집운동가',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/60.jpg',
    imgAlt: '대체 텍스트입니다..'
  },
  {
    id: 2,
    name: '윤헌주',
    age: 43,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/30.jpg',
    imgAlt: '대체 텍스트입니다..'
  },
  {
    id: 3,
    name: '김미리',
    age: 36,
    job: '얼리버드',
    imgSrc: 'https://randomuser.me/api/portraits/med/women/30.jpg',
    imgAlt: '대체 텍스트입니다..'
  }
];


/* 요소 순환 ---------------------------- */

// forEach

function user(user) {
  // console.log(user.job);
}

people.forEach(user);


const span = document.querySelectorAll('span'); // 모든 span 태그 가져옴 (유사배열)

span.forEach((elem, index) => { // 이벤트 한번에 처리하고 싶을때 -> 유사배열이므로 forEach 사용 가능

  elem.addEventListener('click', function() {
    this.style.color = 'orange';
  })

});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
const reverse = [...people]; // 원형 파괴 -> 복사해놓고 사용
reverse.reverse();

const reverse2 = people.toReversed(); // 원형 파괴 X


// splice
// const splice = people.splice(2, 1, {name: '선범'}); // 원형 파괴

const splice2 = people.toSpliced(2, 1, {name: '선범'}); // 원형 파괴 X


// sort
function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

const sort = people.sort(compare);


/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

const map = people.map((user) => {
  return user.job;
});

const age = people.map((user) => {
  user.age += 2;

  return user.age;
});



const cardTag = people.map((user) => {
  
  const template = /* html */`
    <li class="userCard">
      <div>
        <img src="${user.imgSrc}" alt="${user.imgAlt}" />
      </div>
      <ul>
        <li> <span class="strong">이름</span> : ${user.name}</li>
        <li> <span class="strong">나이</span> : ${user.age}</li>
        <li> <span class="strong">직업</span> : ${user.job}</li>
      </ul>
    </li>
  `
  return template;
})


const ul = document.querySelector('ul');

cardTag.forEach(tag => ul.insertAdjacentHTML('beforeend',tag));




/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find -> 아이템 자체를 반환 (하나만 반환)

const mj = people.find((user) => {
  return user.name === 'MJ';
});


// findIndex

/* 요소 걸러내기 --------------------------- */

// filter -> 배열을 반환

const adult = people.filter((user) => {
  return user.age > 20;
});


/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

// 나이 합
const ageSum = people.reduce((sum, user) => {
  return sum += user.age;
}, 0);


// userCard 태그 만들기
const template = people.reduce((htmlCode, user) => {
  return htmlCode + `<li class="userCard>${user.name}, ${user.age}, ${user.job}</li>`
}, '');


/* string ←→ array 변환 ------------------ */

// split: string -> array
// join : array -> string


const _arr = '강현 종국 세현 영현';


const stringToArray = _arr.split(' ');

const arrayToString = stringToArray.join(' ');



const products = [
  {name: '냉동 만두', price: 10000, brand: '비비고'},
  {name: '냉동 피자', price: 15000, brand: '오뚜기'},
  {name: '냉동 치킨 너겟', price: 12000, brand: '하림'},
  {name: '냉동 감자튀김', price: 8000, brand: '맥케인'},
  {name: '냉동 새우', price: 18000, brand: '곰곰'}
];


// forEach 함수 만들기
const _forEach = (f, i) => {
  for (const a of i) {
    f(a); // 함수의 재사용성을 높이기 위해 함수 f에 a 전달
  }
};

_forEach ((item) => {}, products); // 실행부


// map 함수 만들기
const _map = (f, i) => {

  const arr = [];

  for (const a of i) {
    arr.push(f(a)); // 실행한 결과를 배열에 담기
  }

  return arr;

};

const newMap = _map((item) => {return item.price}, products); // 실행부



// filter 함수 만들기
const _filter = (f, i) => {
  const arr = [];

  for (const a of i) {
    if (f(a)) { // true나 false로 값이 반환되기 때문에 조건문에 활용
      arr.push(a);
    }
  }

  return arr;
};

const product = _filter((item) => {
  return item.price < 15000; // true나 false로 값이 반환됨
}, products);



// reduce 함수 만들기
const _reduce = (f, acc, i) => {

  if (!i) {
    i = acc;
    acc = i.shift();
  }

  for (const a of i) {
    acc = f(acc, a);
  }

  return acc;

};


const t = _reduce((acc, cur) => acc + cur.price, 0, products);




const add = (a, b) => a + b;


// 함수형 프로그래밍 형태
console.log(
  _reduce(
    add,
    _map(p => p.price,
      _filter(p => p.price < 20000, products)
    )
  )
);


// currying function

// reduce,
// add,
// map,
// filter,
// log(products)
