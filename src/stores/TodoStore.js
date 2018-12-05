import { observable, action, computed, toJS } from "mobx";
import { remove, filter, sortBy, reverse } from "lodash";
import {
  getAllTodos,
  addTodo,
  deleteTodo,
  changeTodoStatus
} from "../apis/TodoApis";

class TodoStore {
  @observable todoList = [];
  @observable todoName = "";

  @computed get sortedTodoList() {
    return reverse(
      sortBy(this.todoList, [
        o => {
          return o.priority;
        }
      ])
    );
  }
  @computed get todoCount() {
    return this.todoList.length;
  }
  @computed get doneTodoCount() {
    return filter(this.todoList, { completed: true }).length;
  }
  @computed get undoneTodoCount() {
    return filter(this.todoList, { completed: false }).length;
  }
  @action
  changeTodoName = todoName => {
    return (this.todoName = todoName);
  };

  @action
  getTotoList = () => {
    getAllTodos().then(data => {
      this.todoList = data;
      console.log(toJS(this.todoList))
    });
  };

  @action
  addTodo = todo => {
    addTodo(todo).then(data => this.todoList.push(data.todo));
  };

  @action
  deleteTodo = id => {
    deleteTodo(id).then(data => {
      remove(this.todoList, todo => todo.id === id);
    });
  };

  @action
  changeTodoStatus = (id, status) => {
    changeTodoStatus(id, status).then(data => {
      this.todoList.forEach(todo => {
        if (todo.id === id) {
          todo.completed = status;
        }
      });
    });
  };
}

export default new TodoStore();
