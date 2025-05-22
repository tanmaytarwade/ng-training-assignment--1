import React, { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks, createTask, updateTask, deleteTask } from './services/taskService';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const loadTasks = () => {
    getTasks()
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error loading tasks:', error));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSave = (task) => {
    if (task.id) {
      updateTask(task.id, task)
        .then(() => loadTasks());
    } else {
      createTask(task)
        .then(() => loadTasks());
    }
  };

  const handleDelete = (id) => {
    deleteTask(id)
      .then(() => loadTasks());
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
  };

  return (
    <div className="App">
      <h1>📝 To-Do List</h1>
      <TaskForm onSave={handleSave} currentTask={currentTask} setCurrentTask={setCurrentTask} />
      <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
