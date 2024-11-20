export const memo = (() => {

  const cache = {};

  return (key, callback) => {
    
    if (!callback) return cache[key]; // callback 없으면 그냥 값 리턴
  
    if (cache[key]) { // 중복될 경우 예외처리
  
      console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);
  
      if (confirm('덮어쓰기?')) {
        const history = cache[key];
        cache[key] = callback();
  
        const current = cache[key];
        console.warn(`${history} => ${current}`);
      }
  
      return cache[key];
  
    }
  
    cache[key] = callback();

  }

})


memo('cube', () => document.querySelector('#cube')); // set
// memo('cube', () => document.querySelector('tbody')); // set

// memo('say', () => 'hello');
// memo('say', () => 'bye');