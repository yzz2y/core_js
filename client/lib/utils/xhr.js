
const END_POINT = 'https://jsonplaceholder.typicode.com/users/2';

// [readyState]: 데이터 진행 상태
// 0: uninitialization
// 1: loading
// 2: loaded
// 3: interactive
// 4: complete => 성공 | 실패


function xhr({
  method = 'GET',
  url = '',
  success = null, // 기본값으로 비워두기
  fail = null, // 기본값으로 비워두기
  body = null, // 기본값으로 비워두기
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*' // 모든 데이터 접근 허용하도록 요청 보냄
  }
} = {}){
   
  
  const xhr = new XMLHttpRequest(); // 생성자 함수로 생성 -> 객체 담김

  
  xhr.open(method,url);

  if (!method === 'DELETE') {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k,v);
    })
  }

  xhr.addEventListener('readystatechange',() => { // readystatechange -> readyState가 변경될 때마다 호출되는 콜백
    const {status,response,readyState} = xhr;

    if(readyState === 4) {

      if(status >= 200 && status < 400) { // 데이터를 성공적으로 가져온 구간

        const data = JSON.parse(response);
        success(data)
        
      }else {
        fail({message:'알 수 없는 오류가 발생했습니다.'})
      }
    }
  })
  xhr.send(JSON.stringify(body));
}



const obj = {
  name:'tiger',
  age:38
}


xhr({
  method:'DELETE',
  url: END_POINT,
  success: (data)=>{
    console.log( data );
  },
  fail: ()=>{},
})


// 자바스크립트 함수 -> 일급 객체 => key, value 설정, 메서드 정의 가능
xhr.get = (url, success, fail) => {
  xhr({url, success, fail});
}

xhr.post = (url, body, success, fail) => {
  xhr({
    method: 'POST',
    url,
    body,
    success,
    fail
  });
}

xhr.put = (url, body, success, fail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    success,
    fail
  });
}

xhr.delete = (url, success, fail) => {
  xhr({
    method: 'DELETE',
    url,
    success,
    fail
  });
}