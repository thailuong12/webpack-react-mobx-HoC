import { withHandlers } from "recompose";
import TodoStore from "../../../../stores/TodoStore";

const onDelete = ({ todo }) => {
  TodoStore.deleteTodo(todo.id);
};

const onCheckStatus = ({ todo }) => {
  TodoStore.changeTodoStatus(todo.id, !todo.completed);
};

const withHandler = withHandlers({
  onCheckStatus: props => () => onCheckStatus(props),
  onDelete: props => () => onDelete(props)
});

export default withHandler;
