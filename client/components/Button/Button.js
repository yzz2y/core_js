export class Button extends HTMLElement {

  constructor() {
    super();

    this.attachShadow({mode: 'open'}); // constructor 안에 꼭 open 해놓고 시작

    this.state = {
      active: this.getAttribute('active') || false // active 속성이 있는지 확인 (처음엔 없으므로 기본값 false 부여될 것)
    };

    this.render(); // 렌더링 (this.state 이후에 나와야함)
    
  }

  static get observedAttributes() {
    return ['active']; // 상태를 observe
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'active') {
      this.state.active = newValue === 'true'; // 상태가 변하면 true 아니면 false
      this.render(); // 상태값 변경에 따라 다시 렌더링
    }
  }

  // connectedCallback() {

  //   this.button = this.shadowRoot.querySelector('button');
  //   this.button.addEventListener('click', this.handleClick.bind(this));
    
  // }

  
  // 클릭 이벤트 바인딩
  handleClick() {

    const newActiveState = !this.state.active;
    this.setAttribute('active', newActiveState);

  }

  render() {
    const {active} = this.state;

    this.shadowRoot.innerHTML = /* HTML */`
      <style>
        @import url('./components/Button/Button.css');

        button {
          background-color: ${active ? 'violet' : 'orange'}; // 상태에 따른 디자인
        }
      </style>
      <button
        type="button",
        aria-pressed="${active}",
        aria-label="${active ? '활성화' : '비활성화'}"
      >
        ${active ? '💜' : '❌'}
      </button>
    `
  // 정확한 this를 찾기 위해 bind(this)
  this.shadowRoot.querySelector('button').addEventListener('click', this.handleClick.bind(this));
  }

}