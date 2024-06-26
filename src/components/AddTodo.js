import styles from "./AddTodo.module.css";
import { useState, useContext } from 'react';
import { TodoItemsCtx } from "../store/TodoItemsCtx";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const { addNewItem } = useContext(TodoItemsCtx);
  function handleNameChange(event) {
    setTodoName(event.target.value);
  }
  function handleDateChange(event) {
    setDueDate(event.target.value);
  }
  const handleAdd = (e) => {
    console.log("Add clicked!");
    e.preventDefault();
    addNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }
  return (
    <form className="container text-center" onSubmit={handleAdd}>
      <div className={`row ${styles.todoRow}`}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange}></input>
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange}></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTodo;
