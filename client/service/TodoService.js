export class TodoService {
  static state = [];

  static initializeState(state) {
    this.state = state;
  }

  static AddTodoItem(id, value, checked) {
    this.state.push({id, value, checked});
  }

  static RemoveTodoItem(id) {
    const t = this.state.filter((t) => t.id !== id); // 제거된 아이템을 제외한 나머지 아이템 담기
  }

  static CheckTodoItem(id, checked) {
    const t = this.state.find(t => t.id === id);
    t.checked = checked;
  }

  static UpdateTodoItem(id, value) {
    const t = this.state.find(t => t.id === id);
    t.value = value;
  }
}