import styles from "./WelcomeMessage.module.css";
import { TodoItemsCtx } from "../store/TodoItemsCtx";
import { useContext } from "react";

function WelcomeMessage() {
  const { todoitems } = useContext(TodoItemsCtx);
  console.log(todoitems);
  return <div>
    {todoitems.length === 0 && <p className={styles.welcome}>Enjoy your day!</p>}
  </div>
}

export default WelcomeMessage;