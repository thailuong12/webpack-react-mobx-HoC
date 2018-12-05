// import React, { Component } from "react";
// import TodoElement from "./TodoElement";
// import styles from "./TodoList.styles.scss";
// import { inject, observer } from "mobx-react";
// import Demo from './demo'

// class TodoList extends Component {
//   render() {
//     const { TodoStore } = this.props;
//     return (
//       <div className={styles.todoInfo}>
//         You have{" "}
//         <span className={styles.todoNumber}>{TodoStore.todoCount}</span>{" "}
//         {TodoStore.todoCount > 1 ? "items" : "item"} in todo list ({" "}
//         <span className={styles.doneTodoNumber}>{TodoStore.doneTodoCount}</span>{" "}
//         done {TodoStore.doneTodoCount > 1 ? "items" : "item"} and{" "}
//         <span className={styles.undoneTodoNumber}>
//           {TodoStore.undoneTodoCount}
//         </span>{" "}
//         undone {TodoStore.undoneTodoCount > 1 ? "items" : "item"} )
//         {TodoStore.sortedTodoList.map(todo => (
//           <TodoElement todo={todo} key={todo.id} />
//         ))}
        
//       </div>
//     );
//   }
// }
// export default TodoList;

import React from "react";
import TodoElement from "./TodoElement";
import styles from "./TodoList.styles.scss";

const TodoList = ({TodoStore: {
  todoNumber,
  doneTodoNumber,
  undoneTodoNumber,
  sortedTodoList,
  todoList
}}) => {
  
  return (
    <div className={styles.todoInfo}>
      You have <span className={styles.todoNumber}>{todoNumber}</span>{" "}
      {todoNumber > 1 ? "items" : "item"} in todo list ({" "}
      <span className={styles.doneTodoNumber}>{doneTodoNumber}</span> done{" "}
      {doneTodoNumber > 1 ? "items" : "item"} and{" "}
      <span className={styles.undoneTodoNumber}>{undoneTodoNumber}</span> undone{" "}
      {undoneTodoNumber > 1 ? "items" : "item"} )
      {sortedTodoList.map(todo => {
        console.log(todo);
        return <TodoElement todo={todo} key={todo.id} />
      }
        
      )}
    </div>
  );
};

export default TodoList;
