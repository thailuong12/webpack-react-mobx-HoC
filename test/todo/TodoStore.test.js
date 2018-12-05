import { configure } from "enzyme";
import TodoStore from "../../src/stores/TodoStore";
import Adapter from "enzyme-adapter-react-15";
import restClient from "../../src/http";
configure({ adapter: new Adapter() });

TodoStore.todoList = [
  {
    id: "test",
    userId: "test",
    title: "test",
    completed: false,
    priority: 5
  },
  {
    id: "test 1",
    userId: "test 1",
    title: "test 1",
    completed: true,
    priority: 1
  }
];

describe("Todo Store", () => {
  it("get to do count with length = 1", () => {
    const store = TodoStore;
    const count = store.todoCount;
    expect(count).toBe(2);
  });
  it("get done todo count = 0", async () => {
    const store = TodoStore;
    const count = store.doneTodoCount;
    expect(count).toBe(1);
  });
  it("get undone todo count = 1", async () => {
    const store = TodoStore;
    const count = store.undoneTodoCount;
    expect(count).toBe(1);
  });
  it("get sorted todo list with first element has 5 priority", async () => {
    const store = TodoStore;
    const list = store.sortedTodoList;
    expect(list[0].priority).toBe(5);
  });
});
