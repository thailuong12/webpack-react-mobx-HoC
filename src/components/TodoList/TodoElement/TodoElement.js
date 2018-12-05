import React from "react";
import styles from "../TodoList.styles.scss";

const TodoElement = ({ todo, onCheckStatus, onDelete }) => {
  return (
    <div className={styles.todoElement}>
      <div>
        Done{" "}
        <input
          className="todoElement__status"
          type="checkbox"
          onChange={onCheckStatus}
          defaultChecked={todo.completed}
        />
      </div>
      <div className="todoElement__title">{todo.title}</div>
      <div className="todoElement__priority">
        <a> {todo.priority}</a>
      </div>
      <div className="todoElement__delete">
        <button className="btn btn-warning" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoElement;
