const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// 기본값 설정
const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
}


export const tiger = async (options) => {

  const {url, ...restOptions} = {
    ...defaultOptions, 
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers
    }
  };

  const response = await fetch(url, restOptions);
  
  if (response.ok) { // response 객체의 ok 속성 확인 -> 성공했을 때 조건문
    response.data = await response.json(); // response 객체의 데이터 속성에 데이터 전부 집어넣기
  }

  return response;

}


// const response = await tiger({
//   url: END_POINT
// });


// tiger 함수의 메서드 정의
tiger.get = (url, options) => {
  return tiger({
    url,
    ...options
  });
}

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    ...options,
    body: JSON.stringify(body),
  });
}

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    ...options,
    body: JSON.stringify(body),
  });
}

tiger.patch = (url, body, options) => {
  return tiger({
    method: 'PATCH',
    url,
    ...options,
    body: JSON.stringify(body),
  });
}

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
}










// tiger.get();
// tiger.post();
// tiger.put();
// tiger.delete();











function getGeolocation(){

  return new Promise((resolve, reject) => {

    navigator.geolocation.getCurrentPosition((data)=>{
      const {latitude:lat, longitude:long} = data.coords;
      resolve({ lat, long })
    })  

  })

}


// const data = await getGeolocation();