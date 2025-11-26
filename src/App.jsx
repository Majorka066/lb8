import { useState, useEffect } from 'react';
import AddTaskForm from './AddTaskForm';
import ToDoList from './ToDoList';
import './style.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearAll = () => {
    setTasks([]); // очищаем массив задач
  };

  return (
    <div className="app">
      <h1>📝 Мои задачи</h1>

      <AddTaskForm addTask={addTask} />

      {/* Кнопка очистки всех задач */}
      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearAll}>
          Очистить всё
        </button>
      )}

      <ToDoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
