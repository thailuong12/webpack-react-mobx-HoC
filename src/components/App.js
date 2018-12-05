import React, { Component } from "react";
import styles from "./App.scss";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { Provider } from "mobx-react";
import TodoStore from "../stores/TodoStore";
class App extends Component {
  render() {
    return (
      <Provider TodoStore={TodoStore}>
        <div className={styles.container}>
          <h1 className={styles.wrapper__title}>Todo List</h1>
          <AddTodo />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
