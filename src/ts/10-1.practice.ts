// 문제: 각 함수들의 매개변수 타입을 지정하여 에러가 발생하지 않도록 만들어주세요.

export function getRandomInt(n: number):number {
  return Math.floor(Math.random() * n);
}

function getDay(num: number): string{

  switch (num) {
    case 0: return "월";
    case 1: return "화";
    case 2: return "수";
    case 3: return "목";
    case 4: return "금";
    case 5: return "토";
    case 6: return "일";
  }
  return '';
}

function weekend(): string {
  const today = getDay(getRandomInt(7));

  let day = today.includes("토") ? "토요일" : today.includes("일") ? "일요일" : "평일";

  return day;

}



function rem(pxValue: number | string, base: number = 0): string {
  if (typeof pxValue === 'string') pxValue = parseInt(pxValue,10);
  return pxValue / base + 'rem';
}




let pow = (numeric: number, powerCount: number): number => {
  let result = 1;
  for(let i = 0; i < powerCount; i++){
    result *= numeric;
  }
  return result;
}; 




let repeat = (text: string, repeatCount: number): string => {
  let result = '';
  for(let i = 0; i < repeatCount; i++){
    result += text;
  }
  return result;
}; 



let calculateTotal = function(...args: number[]): number {
  
  let total = 0;
  args.forEach((a)=>{
    total += a;
  })
  return total;
}

calculateTotal(10,20,30);





// url을 비교해서 맞으면 success 함수, 다르면 fail 함수 실행하는 콜백 함수
// success 함수 => 입력값: url(문자열)          리턴값: 없음
// fail 함수    => 입력값: err(message: 문자열) 리턴값: 없음

// 뽑아서 사용
type Error = {
  message: string
}
type Success = (url: string) => void;
type Fail = (err: Error) => never;

// 전체 합치기
type MovePage = (url: string, success: Success, fail: Fail) => void;

// 전체 함수에 타입을 주려면 함수 선언문으로는 안됨 -> 화살표 함수로 바꿔서 줘야함
const movePage: MovePage = (url, success, fail) => {

  if (url.match(/http.+www/) && typeof url === 'string') {
    success(url);
  } else {
    fail({message:'에러입니다'});
  }
}

movePage (
  'https:www.naver.com',
  (url) => console.log( url ),
  (err) => {
    console.log( err );
    throw new Error('..');
  }
);



type Swap = <T>(arr: T[], a: number, b: number) => T[];

const swapElements: Swap = (array, a, b) => {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  return array;
}



const numbers = [1, 2, 3, 4];
console.log(swapElements(numbers, 0, 3)); //  [4, 2, 3, 1]

const words = ["apple", "banana", "cherry"];
console.log(swapElements(words, 1, 2)); //  ["apple", "cherry", "banana"]







type Callback<T> = (data: T) => T;
type Delay = <T>(callback: Callback<T>, timeout: number) => void;

// 기존 generic type: 입력값의 타입이 전달됨
// 콜백 generic type: 리턴값의 타입이 전달됨

const delay: Delay = (callback, timeout = 1000) => {
  setTimeout(callback, timeout);
};

delay((data) => data, 1000);