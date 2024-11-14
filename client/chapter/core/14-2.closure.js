

function earth() {

  let water = true;
  let gravity = 10;
  
  return (value) => [water,gravity];
  

}




const ufo = earth();


ufo(false);




// 클로저 -> 어디에 활용?


const button = document.querySelector('button');



const handleClick = (() => {
  let clicked = false; // 전역에 빼놓으면 오염되기 때문에 함수 안에 선언
  
  return () => {
    if(!clicked){

      document.body.style.background = 'orange';
  
    }else{
  
      document.body.style.background = 'white';
    }
  
    clicked = !clicked;
  }
})(); // 즉시 실행 함수


button.addEventListener('click', handleClick);






function useState(init) {
  let value = init;

  function read() {
    return value;
  }

  function write(newValue) {
    value =  newValue;
  }

  return [read, write]; // 두 함수의 본문만 묶어서 반환
}


const [number, setNumber] = useState(10); // 받자마자 (배열) 구조 분해