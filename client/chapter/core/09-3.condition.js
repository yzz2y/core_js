/* ---------------- */
/* Switch           */
/* ---------------- */


let a = 15;

switch (a) {
  case 10:
    console.log(10);
    break;
  case 13:
    console.log(13);
    break;
  case 15:
    console.log(15);
    break;
  case 20:
    console.log(20);
    break;
    
}



/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

console.clear();

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = MORNING;


// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;

  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;

  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;

  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
  
}


/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');

}
else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');

}
else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');

}
else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');

}
else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');

}


/* switch vs. if -------------------------------------------------------- */


console.clear();


// prompt를 통해 숫자를 입력 받기 (0 ~ 6까지)
// 받은 숫자를 사용해서 switch case 돌리기

// 0 : 일
// 1 : 월
// 2 : 화
// 3 : 수
// 4 : 목
// 5 : 금
// 6 : 토


// 함수는 하나의 기능만을 수행하는 것 (클린 코드) -> randomGetDay()를 getRandom과 getDay로 분리
// 함수는 재사용성을 고려해야함 (유연한 함수) -> getRandom의 parameter를 조정
// separation of concerns (관심사의 분리)

function getRandom(n) {
  const num = Math.floor(Math.random() * n);
  return num;
}

function getDay(value) {

  // const value = getRandom(7);

  switch (value) {
    case 0:
      return "일";

    case 1:
      return "월";

    case 2:
      return "화";

    case 3:
      return "수";

    case 4:
      return "목";

    case 5:
      return "금";

    case 6:
      return "토";

  }
}


// getDay 함수를 가지고
// 주말인지 평일인지를 콘솔창에 보여주는 함수(weekend) 만들기

function weekend() {

  const day = getDay(getRandom(7));
  
  // 1. switch
  // switch(day) {

  //   case '토':
  //   case '일':
  //     return '주말';

  //   case '월':
  //   case '화':
  //   case '수':
  //   case '목':
  //   case '금':
  //     return '평일';
      
  // }

  // 2. if-else
  // if (day.includes('토') || day.includes('일')) {
  //   return '주말';
  // } else {
  //   return '평일';
  // }

  // 3. 삼항식
  return (day.includes('토') || day.includes('일')) ?
          `${day}요일, 주말` :
          `${day}요일, 평일`;

}

console.log(weekend());




console.clear();

function solution(array) {
  
  array.sort((a, b) => a - b);
  
  let answer;

  if (array.length === 1) {

    answer = array[0];

  } else {

    let countInfo = [];

    for (let i = 0; i < array.length; i++) {

      if (array[i] === countInfo[countInfo.length - 1].num)  {

        countInfo[countInfo.length - 1].count++;
        break;

      } else {

        countInfo.push({num: array[i], count: 1});

      }

    }

    answer = countInfo[Math.max(...countInfo.map(countInfo => countInfo.count))].num;

  }

  return answer;
}

console.log(solution([1,4,2,3,4,1]));
