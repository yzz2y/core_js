


// 삼각함수 -> 원운동, 진동, 원하는 각도로 이동, 눈 내리는 애니메이션


// cos@ = x좌표 -> Math.cos(radian)
// sin@ = y좌표 -> Math.sin(radian)


function toRadian(degree) {
  return degree * (Math.PI / 180);
}


function toDegree(radian) {
  return radian * (180 / Math.PI);
}



const circle = document.querySelector('.circle');

let degree = 45;
let radius = 10;

let lastInsertTime = 0;

function animate(){
    
  degree = degree + 0.3;
  radius = radius + 0.3;
  
  const x = Math.cos(toRadian(degree)) * radius;
  const y = Math.sin(toRadian(degree)) * radius;
  
  circle.style.transform = `translate(${x}px,${-y}px)`;
  
  const currentTime = Date.now();

  if(currentTime - lastInsertTime >= 300){
    const tag = `
    <div style="transform:translate(${x}px,${-y}px)">❤️</div>
  `

    document.querySelector('.space').insertAdjacentHTML('beforeend',tag)

    lastInsertTime = currentTime
  }
  
}


// setInterval(animate, 0); // animate 함수가 0.01초 간격으로 지속적으로 실행되도록