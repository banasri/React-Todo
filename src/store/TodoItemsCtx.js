import { createContext, useReducer } from "react";

export const TodoItemsCtx = createContext({
  todoitems: [],
  addNewItem: () => { },
  deleteItem: () => { }
});

const todoReducer = (currTodoitems, action) => {
  let newToDoItems = [];
  if (action.type === "NEW_ITEM") {
    newToDoItems = [
      ...currTodoitems,
      { name: action.payload.todoName, dueDate: action.payload.dueDate }];
    return newToDoItems;
  }
  if (action.type === "DELETE_ITEM") {
    newToDoItems = currTodoitems.filter((item) => item.name !== action.payload.todoName);
    return newToDoItems;
  }

}

function TodoItemsCtxProvider({ children }) {
  const [todoitems, dispatchTodoitems] = useReducer(todoReducer, []);

  function addNewItem(todoName, dueDate) {
    const addItem = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        dueDate
      }
    };
    dispatchTodoitems(addItem);
  }

  function deleteItem(itemName) {
    const deleteItem = {
      type: "DELETE_ITEM",
      payload: {
        todoName: itemName
      }
    };
    dispatchTodoitems(deleteItem);
  }

  const value = {
    todoitems,
    addNewItem,
    deleteItem
  }
  return (
    <TodoItemsCtx.Provider value={value}>
      {children}
    </TodoItemsCtx.Provider>
  )
}

export default TodoItemsCtxProvider;