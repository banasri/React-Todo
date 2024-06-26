import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsCtx } from "../store/TodoItemsCtx";


function TodoItems() {
  const { todoitems } = useContext(TodoItemsCtx);
  console.log('todoitems', todoitems);
  return (
    <>
      {todoitems.map((item) =>
        <TodoItem name={item.name} date={item.dueDate} key={item.name} />
      )}
    </>
  );
}
export default TodoItems;