/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');


section.addEventListener('click', (e) => {

  // console.log('%c section', 'color:dodgerblue');

  console.log('target: ', e.target); // target: 마우스 제일 처음 만나는 대상
  console.log('currentTarget: ', e.currentTarget); // currentTarget: 이벤트 걸린 대상
  
  
});

// article.addEventListener('click', () => {

//   console.log('%c article', 'color:hotpink');
  
// });

// p.addEventListener('click', (e) => {

//   e.stopPropagation(); // 버블링 중단

//   console.log('%c p', 'color:orange');
  
// });







/* 캡처링 ----------------------------------------------------------------- */