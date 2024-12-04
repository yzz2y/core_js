
/* alias type */

/* 

  1. type

  2. interface

*/


// 1. type
type User = { // type -> '=' 있음
  id: number,
  name: string,
  auth: string,
  isPaid: boolean
}

type User1 = {
  address: string
}

type mixed = User & User1; // 두 타입 합치기


// 2. interface
interface _User { // interface -> '=' 없음
  id: number,
  name: string,
  auth: string,
  isPaid: boolean
}

// interface _User {
//   address: string
// }



const user1: User = {
  id: 1,
  name: 'tiger',
  auth: 'admin',
  isPaid: true
}

const user2: _User = {
  id: 1,
  name: 'tiger',
  auth: 'admin',
  isPaid: true
}

const user3: User = {
  id: 1,
  name: 'tiger',
  auth: 'admin',
  isPaid: true
}




/* index signature */
// 객체의 키가 동적으로 결정될 때 유용하게 사용 가능
type Person = {
  name: string,
  age: number,
  email: string,
  [key: string]: string | number // name, age, email을 제외한 나머지는 유동적으로 받음 (대신 key는 문자열, value는 string이나 number여야함)
}

const person: Person = {
  name: 'beom',
  age: 30,
  email: 'tiger@naver.com',
  address: '서울시 중랑구',
  phone: '01012345678'
}