import { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTask(text);
    setText('');
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите задачу..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Добавить</button>
    </form>
  );
}

export default AddTaskForm;
