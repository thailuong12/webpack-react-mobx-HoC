import { withHandlers } from "recompose";
import TodoStore from "../../../stores/TodoStore";
import { isEmpty } from "lodash";
const onSubmitAddTodo = ({ todoName, todoPriority, todoNameError, resetInputField }) => {
  if (!isEmpty(todoNameError)) {
    return;
  }
  TodoStore.addTodo({
    todoName: todoName.value,
    todoPriority: todoPriority.value
  });
  resetInputField();
};

const withSubmitTodo = withHandlers({
  onAddTodo: props => () => onSubmitAddTodo(props)
});

export default withSubmitTodo;
