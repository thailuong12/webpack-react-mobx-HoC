import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import {
  getAllTodos,
  addTodo,
  deleteTodo,
  changeTodoStatus
} from "../../src/apis/TodoApis";
configure({ adapter: new Adapter() });
let todoId = "";
describe("Todo Apis", () => {
  it("get todo list", () => {
    return getAllTodos().then(data => {
      expect(data).toBeDefined();
    });
  });
  it("add todo", () => {
    const todo = {
      todoName: "test",
      todoPriority: 5
    };
    return addTodo(todo).then(data => {
      expect(data).toBeDefined();
      expect(data.todo.title).toBe("test");
      expect(data.todo.priority).toBe(5);
      todoId = data.todo.id;
    });
  });
  it("update todo status", () => {
    return changeTodoStatus(todoId, true).then(data => {
      expect(data.todo.nModified).toBe(1);
    });
  });
  it("delete todo", () => {
    return deleteTodo(todoId).then(data => {
      expect(data.todo.n).toBe(1);
    });
  });
});
