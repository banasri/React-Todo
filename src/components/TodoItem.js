import styles from "./TodoItem.module.css";
import { useContext } from "react";
import { TodoItemsCtx } from "../store/TodoItemsCtx";

function TodoItem({ name, date }) {
  const { deleteItem } = useContext(TodoItemsCtx);
  return (
    <div className="container">
      <div className={`row ${styles.itemrow}`}>
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={() => deleteItem(name)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
