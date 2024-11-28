import { TodoItem } from '../TodoItem/TodoItem.js';

const todoTemplate = document.createElement('template');

todoTemplate.innerHTML = `
<style>@import url('./components/TodoList/TodoList.css');</style>
  <div class="container">
    <h1>TO DO LIST <img src="../assets/checklist.png" alt="체크리스트" /></h1>
    <ul class="todo"></ul>
    <button type="button" class="add-item"> + </button>
  </div>
`


export class TodoList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode:'open'});
    this.render(); // 생성 먼저 하고

    this.container = this.shadowRoot.querySelector('.container'); // 잡아야함
    this.todo = this.container.querySelector('.todo');
    this.addButton = this.container.querySelector('.add-item');
  }

  connectedCallback() {
    const tl = gsap.timeline(); // 애니메이션 타임라인 관리 (-> onComplete 사용하지 않고 애니메이션 설계 가능)

    tl.from(this.container.children[0], {opacity: 0, y: 30});
    tl.from(this.container.children[1], {opacity: 0, height: 0, clearProps:'all'}); // 애니메이션 끝나면 prop 제거해야함
    tl.from(this.container.children[2], {opacity: 0, marginTop:40});

    this.addButton.addEventListener('click', () => this.handleAddClick());

    const data = JSON.parse(localStorage.getItem('todo'));

    data.forEach(({id, value, checked}) => {
      const todoItem = new TodoItem(id, value, checked);
      this.todo.append(todoItem);
    });
  }

  handleAddClick() {
    const todoItem = new TodoItem(Date.now(), '', false);

    this.todo.append(todoItem);
    
  }

  render() {
    this.shadowRoot.append(todoTemplate.content.cloneNode(true));
  }
}