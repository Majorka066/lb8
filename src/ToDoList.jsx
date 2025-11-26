import ToDoItem from './ToDoItem';

function ToDoList({ tasks, removeTask }) {
  if (tasks.length === 0) {
    return <p className="empty">Пока задач нет 🙂</p>;
  }

  return (
    <ul className="list">
      {tasks.map(task => (
        <ToDoItem key={task.id} task={task} removeTask={removeTask} />
      ))}
    </ul>
  );
}

export default ToDoList;
