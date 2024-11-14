/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


// class Animal {

//   // public class field (정적으로 정의/명시하는 공간)
//   legs = 4;
//   tail = true;

//   // private class field (밖에서 접근 불가)
//   #name = 'unknown';

//   constructor(name) { // 최초 1회만 실행됨 -> 초기화
//     this.#name = name;
//     this.stomach = [];
    
//   }

//   get eat() {
//     return this.stomach;
//   }

//   set eat(food) {
//     this.stomach.push(food);
//   }

// }

// class Tiger extends Animal {

//   static options = {
//     version: '1.0.0',
//     company: '8B-studio',
//     ceo: '심선범'
//   }

//   constructor(name) {
//     super(name);
//     this.pattern = '호랑이 무늬';
//   }

//   hunt(target) {
//     this.prey = target;
//     return `${target}에게 조용히 접근한다.`;
//   }

//   static bark(sound) {
//     return sound + '!';
//   }

// }



// // const a  = new Animal('몽실이');

// const 호랑이 = new Tiger('호돌이');






/*
1. 버튼 선택
2. 클릭 이벤트
3. 태그 만들기
4. 태그 화면에 랜더링 하기
*/


// class

// 전역을 오염하지 않음
// 재사용성이 좋아짐

class Button{

  constructor(selector){
    this.button = document.querySelector(selector);
    this.count = 0;
    this.attachEvent();
  }

  static showMessage(selector) {
    console.log(document.querySelector(selector).textContent);
  }

  createTag(){
    return `<div>${++this.count + 'clicked'}</div>`;
  }
  
  #render(){ // private field
    document.body.insertAdjacentHTML('beforeend', this.createTag());
  }

  handleClick(){
    this.#render();
  }
  
  attachEvent(){
    this.button.addEventListener('click', () => this.handleClick());
  }

}

const button = new Button('.btn');









// const _button = document.querySelector('.btn');

// let count = 0;

// function createTag() {
//   return `<div>${++count + 'clicked'}</div>`;
// }

// function render(data){
//   document.body.insertAdjacentHTML('beforeend', data);
// }

// function handleClick() {
//   render(createTag());
// }

// _button.addEventListener('click',handleClick);





class User {

  #password; // private은 파생 클래스에 상속되지 않음

  constructor(userID, userPW) {
    this.userID = userID;
    this.#password = this.hashPassword(userPW);
  }

  hashPassword(pw) {
    return 'hashCODE' + pw + '소금찹찹';
  }

  checkPassword(pw) {
    return this.#password === this.hashPassword(pw);
  }

}

const user = new User('tiger', 'hello123');