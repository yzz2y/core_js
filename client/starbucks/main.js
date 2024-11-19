const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = d => d.style.height = 0; // 높이 제거하기 (0px)



// header의 높이값을 가져와서 depth의 top값으로 설정
function vanilla() {

  depthList.forEach((depth) => {
    depth.style.top = header.offsetHeight + 'px'; // 스타일 값 설정할 때는 단위 중요
  });
  
  
  aList.forEach((a) => {
  
    // event binding => 'mouseenter' event => this 출력하기
    // a.addEventListener('mouseenter', (e) => {console.log(e.currentTarget)}); // 화살표함수 사용하면서 this 바인딩하고 싶을때 -> 이벤트객체.currentTarget 사용
  
    // 현재 선택된 a태그 안에 있는 depth 찾기
    a.addEventListener('mouseenter', (e) => {
  
      const currentDepth = e.currentTarget.lastElementChild;
  
      depthList.forEach(h); // forEach에 들어갈 아이템을 다른 함수에 전달하고 싶다면 forEach 안에 함수 자체를 넣을 수 있음
  
      // depth에게 높이 주기 (100px)
      currentDepth.style.height = '100px';
  
    });
  
  })
  
  
  header.addEventListener('mouseleave', () => {
    depthList.forEach(h);
  })

}


/* global gsap */

aList.forEach((a) => {

  gsap.set(depthList,{top: header.offsetHeight})


  aList.forEach((a)=>{
  
    const currentDepth = a.lastElementChild;
  
    const tl = gsap.timeline({paused:true})
                .to(currentDepth,{height:100, ease:'power2'.inOut});
  
    a.addEventListener('mouseenter',()=> tl.play())
    a.addEventListener('mouseleave',()=> tl.reverse())
  
  })

})