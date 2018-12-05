import { withStateHandlers } from "recompose";
import TodoStore from "../../../stores/TodoStore";

const initialState = {
  todoName: { value: TodoStore.todoName },
  todoPriority: { value: 1 }
};

const onHandelTodoChange = props => event => ({
  todoName: {
    value: TodoStore.changeTodoName(event.target.value),
    isDirty: true
  }
});

const resetInputField = props => () => ({
  todoName: {
    value: "",
    isDirty: false
  }
});

const onPriorityChange = props => event => ({
  todoPriority: { value: event.target.value }
});
const withState = withStateHandlers(initialState, {
  onHandelTodoChange,
  onPriorityChange,
  resetInputField
});

export default withState;
