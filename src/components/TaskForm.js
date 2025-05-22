import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSave, currentTask, setCurrentTask }) => {
  const [formData, setFormData] = useState({ title: '', description: '', completed: false });

  useEffect(() => {
    if (currentTask) {
      setFormData(currentTask);
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ title: '', description: '', completed: false });
    setCurrentTask(null);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <label>
        Completed:
        <input type="checkbox" name="completed" checked={formData.completed} onChange={handleChange} />
      </label>
      <button type="submit">{formData.id ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
