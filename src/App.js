import "./App.css";
import { useState } from "react";

import { MdAdd } from "react-icons/md";
import { SlTrash } from "react-icons/sl";
import { VscGithub } from "react-icons/vsc";
import {SiLinkedin } from "react-icons/si";

const TodoInput = ({ todo, setTodo, addTodo, setTodos, todos }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        id="todo-input"
        name="todo"
        value={todo}
        placeholder="Let's get workin'..."
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        onKeyUp={(e) => {
          if(e.key==='Enter') {
            e.preventDefault();
            setTodo(e.target.value);
            setTodos([...todos, todo]);
            setTodo('');
          }
        }}
      ></input>
      <button className="add-button" id="urmom" onClick={addTodo}>
        <MdAdd size={21}/>
      </button>
    </div>
  );
};

const TodoList = ({ todoList, removeTodo }) => {
  return (
    <div className="input-list">
      {todoList?.length > 0 ? (
        <ul className="todo-list">
          {todoList.map((entry, index) => (
            <div className="todo">
              <li key={index}>{entry}</li>
              <button className="delete-button" onClick={()=>{removeTodo(entry)}}>
                <SlTrash size={18}/>

              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>Add some tasks! :)</p>
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <>
        <p className="love">
        Contact Us
        </p>
        <p className="socials"> 
          <a href="https://github.com/21E238-Raghul" rel="noreferrer" target="_blank"><VscGithub size={25}/></a>
          <a href="https://www.linkedin.com/in/raghul-s-a64816256/" rel="noreferrer" target="_blank"><SiLinkedin size={25}/></a>
        </p>
        <h6>&copy; All rights reserved</h6>
        
    </>
  );
};

const App = () => {
  // Create a todo
  const [todo, setTodo] = useState("");
  // Getter function: todo -> displays current state
  // In this case, initial value is undefined, i.e., ""
  // Setter function: setTodo -> sets/updates state

  // Add a todo
  const [todos, setTodos] = useState([]);
  // Getter function: todos -> empty array (todos are pushed to it)
  // Setter function: setTodos -> updates todos array using addTodo()

  // Function to add todo to array
  const addTodo = () => {
    if (todo !== "") {
      // Ensures that input isn't empty
      setTodos([...todos, todo]);
      setTodo(""); // Clears input after todo is pushed to array
    }
  };
  // todo is pushed to todos (a copy of todos using ... operator)

  const deleteTodo = (task) => {
    const newTodos = todos.filter((todo) => {
      return todo !== task;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Make a To-Do List!</h1>
      <div className="Content">
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} setTodos={setTodos} todos={todos}/>
        <TodoList todoList={todos} removeTodo={deleteTodo} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;