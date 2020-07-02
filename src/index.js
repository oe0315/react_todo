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
    const newTodo = { id: todoList.length, content: value };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setValue("");
  };

  const AddTodo = props => {
    return (
      <div>
        <input type="text" value={props.value} onChange={props.onChange} />
        <button onClick={props.add}>追加</button>
      </div>
    );
   };

   const TodoElement = props => {
     return (
       <li>
         {props.content}
         <button onClick={props.onDelete}>削除</button>
       </li>
     );
   };

   const handleDelete =id => {
     const newTodoList = todoList.filter(todo => todo.id !== id);
     setTodoList(newTodoList);
   }

  return (
    <div>
      <h1>TODO App</h1>
      <div>
        <AddTodo value={value} onChange={handleChange} add={add} />
        <ul>
          {todoList.map(todo => (
            <TodoElement
              key={todo.id}
              content={todo.content}
              onDelete={() => handleDelete(todo.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};


ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
