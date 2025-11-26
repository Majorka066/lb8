function ToDoItem({ task, removeTask }) {
  return (
    <li className="item">
      <span>{task.text}</span>
      <button className="delete-btn" onClick={() => removeTask(task.id)}>
        ✖
      </button>
    </li>
  );
}

export default ToDoItem;
