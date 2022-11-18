import axios from "axios";
import { useEffect, useState } from "react";
import Todo from "./Todo";

function App() {
  const [todoText, setTodoText] = useState("");

  const [todos, setTodos] = useState([]);

  async function getData() {
    const response = await axios.get("http://localhost:5000/todo");
    const todos = response.data;
    setTodos(todos);
  }

  async function addTodo() {
    await axios.post("http://localhost:5000/todo", { todo: todoText });
    await getData();
    setTodoText("");
  }

  async function deleteTodo(index) {
    const url = "http://localhost:5000/todo/" + index;
    await axios.delete(url);
    await getData();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <Todo todo={todo} deleteTodo={deleteTodo} index={index} key={index} />
        ))}
      </ul>
      <div>
        <input
          value={todoText}
          onChange={(event) => {
            const newText = event.target.value;
            setTodoText(newText);
          }}
          style={{ marginRight: "10px" }}
          type="text"
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
