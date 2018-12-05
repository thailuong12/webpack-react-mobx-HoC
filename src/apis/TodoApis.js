import RestClient from "../http";

export function getAllTodos() {
  return RestClient.to("api/todo").asyncGet();
}
export function addTodo(todo) {
  return RestClient.to("api/todo").asyncPost(todo);
}
export function deleteTodo(id) {
  return RestClient.to("api/todo").asyncDelete({ id });
}
export function changeTodoStatus(id, status) {
  return RestClient.to("api/todo").asyncPut({ id, status });
}
