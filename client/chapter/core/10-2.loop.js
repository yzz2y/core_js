/* -------------------- */
/* Do While Loop        */
/* -------------------- */



// let i = 0;

// do {

//   console.log(i);

//   if (i === 3) {
//     console.log('3번 입니다');
    
//   }

//   i++;
  
// } while(i < 5)







// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력

// let i = prompt('순환 횟수를 입력해주세요');
// // 처음 입력받은 값은 string

// do {

//   console.log(i);

//   if (i < 0) break;

//   i--;

// } while (i >= 0); // 비교문 실행 후 숫자로 변환됨



// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정


// let i = prompt('순환 횟수를 입력해주세요');
// let j = 0;

// do {

//   console.log(j++);
  
// } while (i--);




// html에 태그를 만들고 내가 원하는 태그에 style을 입히기 위해 css 사용
// html에 태그를 만들고 내가 원하는 태그에 동적 제어를 주기 위해 DOM 사용

// DOM(Document Object Model)


function next(node) {

  // validation
  if (typeof node === 'string') {

    node = document.querySelector(node);

  }

  do {

    node = node.nextSibling;

  } while (node.nodeType != 1)

  return node;

}

const second = next('.first');

function prev(node) {

  // validation
  if (typeof node === 'string') {

    node = document.querySelector(node);

  }

  do {

    node = node.previousSibling;

  } while (node.nodeType != 1)

  return node;

}



// do{
//   first = first.nextSibling

// }while(first.nodeType !== 1)



// console.log( first );