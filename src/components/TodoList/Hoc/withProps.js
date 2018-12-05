import { withProps, mapProps } from 'recompose';
// import TodoStore  from '../../../stores/TodoStore';

const withTodoListInfoProps = mapProps(({TodoStore}) => {
    return {
    todoNumber: TodoStore.todoCount,
    doneTodoNumber: TodoStore.doneTodoCount,
    undoneTodoNumber: TodoStore.undoneTodoCount,
    sortedTodoList: TodoStore.sortedTodoList,
    todoList: TodoStore.todoList
};
});

export default withTodoListInfoProps;