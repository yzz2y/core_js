import { LitElement, html } from 'lit';

class TodoItem extends LitElement {

  static properties = {
    id: {type: Number},
    value: {type: String},
    checked: {type: Boolean}
  }


  constructor() {
    super();

    this.checked = false;
  }

  handleToggleClicked() {
    this.checked = !this.checked;

    this.dispatchEvent(
      new CustomEvent('update', {
        detail: {checked: this.checked}, // 커스텀이벤트로 부모(TodoList)에게 전달해줌
        bubbles: true,
        composed: true
      })
    )
  }

  handleDelete() {
    this.displatchEvent(
      new CustomEvent('delete', {
        bubbles: true,
        composed: true
      })
    )
  }

  handleValueChange(e) {
    this.value = e.target.value;

  }

  handleBlur() {
    this.dispatchEvent (
      new CustomEvent('update', {
        detail: {value: this.value},
        bubbles: true,
        composed: true
      })
    )
  }

  render() {
    return html /* HTML */`
      <li class="item">
        <input 
          type="checkbox"
          .checked=${this.checked}
          @click=${this.handleToggleClicked}
          />
        <input type="text"
          .value=${this.value}
          @input=${this.handleValueChange}
          @blur=${this.handleBlur}
        />
        <button type="button" class="delete" @click=${this.handleDelete}>x</button>
      </li>
    `
  }

}

customElements.define('todo-item', TodoItem);