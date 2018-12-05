import React from "react";
import styles from "./AddTodo.Styles.scss";
import classNames from "classnames";
import { isEmpty } from "lodash";
// const Props = {
//   todoName: Object,
//   onHandelTodoChange: Function,
//   onPriorityChange: Function,
//   onAddTodo: Function,
//   todoNameError: Array
// };
const AddTodo = ({
  todoName,
  onHandelTodoChange,
  onPriorityChange,
  onAddTodo,
  todoNameError = []
}) => {
  return (
    <div className={styles.container}>
      <div className={`form-group row`}>
        <label className="col-sm-2 col-form-label">Todo Name :</label>
        <div className="col-sm-8">
          <input
            placeholder="Add New Todo..."
            name="todoName"
            value={todoName.value}
            onChange={onHandelTodoChange}
            className={classNames({
              "form-control is-invalid": !isEmpty(todoNameError),
              "form-control": isEmpty(todoNameError)
            })}
          />
          <div className="invalid-feedback">{todoNameError}</div>
        </div>
      </div>
      <div className={`form-group row`}>
        <label className="col-sm-2 col-form-label">Priority :</label>
        <div className="col-sm-2">
          <select className="form-control" onChange={onPriorityChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div>
        <button onClick={onAddTodo} className="btn btn-primary col-sm-2">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
