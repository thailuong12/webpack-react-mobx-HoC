import { compose } from "recompose";
import withState from "./WithState";
import withTodoNameError from "./WithTodoNameError";
import withSubmitTodo from "./WithSubmitTodo";

export default compose(
  withState,
  withTodoNameError,
  withSubmitTodo
);
