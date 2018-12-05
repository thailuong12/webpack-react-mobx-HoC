import { withProps } from "recompose";
import validate from "validate.js";

const todoNameValidation = todoName => {
  if(!todoName.isDirty) {
    return;
  }
  let inputError = [];
  const constraints = {
    todoName: {
      presence: true,
      length: {
        minimum: 6,
        minimumMessage: "must be at least 6 characters",
        maximum: 100,
        maximumMessage: "must be fewer than 100 characters"
      }
    }
  };
  const error = validate({ todoName: todoName.value }, constraints);
  if (error) {
    inputError.push(error.todoName);
  }
  return inputError;
};

const withTodoNameError = withProps((ownerProps) => ({
  todoNameError: todoNameValidation(ownerProps.todoName)
}));

export default withTodoNameError;
