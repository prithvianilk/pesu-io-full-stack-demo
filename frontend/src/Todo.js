function Todo(props) {
  // what is this??
  const { todo, index, deleteTodo } = props;

  // same as
  //   const todo = props.todo;
  //   const index = props.index;
  //   const deleteTodo = props.deleteTodo;

  return (
    <li
      style={{
        margin: "5px 0",
        cursor: "pointer",
      }}
      onClick={() => deleteTodo(index)}
    >
      {todo}
    </li>
  );
}

export default Todo;
