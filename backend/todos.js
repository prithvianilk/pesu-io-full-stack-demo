let todos = [];

export function getTodos() {
  return todos;
}

export function addTodo(todo) {
  todos.push(todo);
}

export function deleteTodo(index) {
  todos = todos.filter((_, currIndex) => {
    return index != currIndex;
  });
}
