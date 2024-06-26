import logo from "./logo.svg";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WecomeMessage";
import TodoItemsCtxProvider from "./store/TodoItemsCtx";

function App() {
  return (
    <TodoItemsCtxProvider>
      <div className="App">
        <AppName />
        <div className="container">
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </div>
      </div>
    </TodoItemsCtxProvider>
  );
}

export default App;
