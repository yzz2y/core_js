
// 클래스 분리

// Model  : 데이터 모델 (데이터 관리)
// View   : 렌더링 (화면 렌더링)
// Control: 이벤트 (이벤트 렌더링)


class Todo {

  // public field에서 초기화
  // input = null;
  // button = null;
  // renderPlace = null;
  // todoListArray = null;

  constructor({input, button, renderPlace}) { // obj.input, obj.button, obj.renderPlace라고 쓰기 귀찮으니까 입력받은 객체를 '구조 분해 할당'

    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);
    this.todoListArray = []; // 값을 저장할 배열

    this.attachEvent(); // 처음에 실행해야 이벤트 실행됨

  }

  get currentInputTodoData() {
    return this.input.value;
  }

  set currentInputTodoData(value) {
    this.input.value = value;
  }

  // 버튼에 클릭 이벤트 등록 input 값이 콘솔창에 나올 수 있도록
  /*
  1. attachEvent 메서드를 만든다.
  2. 해당 메서드 안에서 button에게 click event를 바인딩 한다.
  3. click event에 연결할 handleClick 메서드를 만든다.
  4. handleClick 함수 안에서 input의 value를 가져온다.
  5. 콘솔창에 출력한다.
  6. 태그 만들기
  7. 랜더링 하기
  */

  addTodoData() {
    this.todoListArray.push(this.currentInputTodoData);
    console.log(this.todoListArray);
    
  }

  handleClick() { // handleCLick으로 클릭 이벤트를 굳이 분리할 필요 없지만 추후에 추가될 이벤트들을 위해 분리하는 것이 좋음
    console.log(this.currentInputTodoData);
    this.#render();
  }

  createTag() {
    return `<li>${this.currentInputTodoData}</li>`; // template literal
  }

  #render() {
    this.renderPlace.insertAdjacentHTML('beforeend', this.createTag());
    this.input.value = '';
  }

  attachEvent() {
    this.button.addEventListener('click', (e) => {
      e.preventDefault(); // button type이 submit이어서 매번 새로고침 되는 것을 방지하기 위해
      this.addTodoData();
      this.handleClick();
    });
  }

}

const todo = new Todo({
  input: '.todo',
  button: '.btn',
  renderPlace: '.todoList'
});

const todo2 = new Todo({
  input: '.todo2',
  button: '.btn2',
  renderPlace: '.todoList2'
});