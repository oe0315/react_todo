import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const add = () => {
    const newTodo = [...todoList, value];
    setTodoList(newTodo);

    setValue("")
  };

  return (
    <div>
      <h1>TODO App</h1>
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <ul>
          {todoList.map((todo, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
      </div>
      <button onClick={add}>追加</button>
    </div>
  );
};


ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
