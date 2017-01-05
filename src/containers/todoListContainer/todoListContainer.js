import { connect } from 'react-redux'
import TodoList from '../../components/todoList/todoList'

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick(todoId) {
    console.log(todoId);
  }
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer;
