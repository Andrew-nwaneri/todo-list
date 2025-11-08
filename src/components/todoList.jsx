import EditTodoForm from "./editTodoForm";
import { TodoItem } from "./todoItem";
import "./components.css";

export const TodoList = ({todos, setTodos}) => {
    const handleDelete = (id) => {
        setTodos(todos.filter(item => item.id !== id))
    };

    const handleEdit = (id) => {
        setTodos(todos.map(item => item.id === id? {...item, isEdit: !item.isEdit} : item ))
    };

    const handleClicked = (id) => {
        setTodos(todos.map(item => item.id === id? {...item, completed: !item.completed} : item ) )
    };

    const editTodo = ({task, id}) => {
        setTodos(todos.map(todo => id === todo.id? {...todo, name: task, isEdit: !todo.isEdit } : todo ))
    }
    return(
<div className="todo-list-container">
  {todos.length > 0 ? (
    todos.map((todo, index) =>
      todo.isEdit ? (
        <EditTodoForm key={todo.id} todo={todo} editTodo={editTodo} />
      ) : (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          handleClicked={handleClicked}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )
    )
  ) : (
    <div className="empty-state">
      <p>No tasks yet — start adding some!</p>
    </div>
  )}
</div>

    )
};