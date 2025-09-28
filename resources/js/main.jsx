import React, { useEffect, useState } from 'react';
import api from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => { fetchTasks(); }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get('/tasks');
      setTasks(res.data);
    } catch (err) { console.error(err); }
  };

  const addTask = (task) => setTasks(prev => [task, ...prev]);
  const updateTask = (task) => setTasks(prev => prev.map(t => t.id === task.id ? task : t));
  const removeTask = (id) => setTasks(prev => prev.filter(t => t.id !== id));

  return (
    <div style={{maxWidth:800,margin:'0 auto',padding:20}}>
      <h1>Todo List</h1>
      <TaskForm onCreate={addTask} />
      <TaskList tasks={tasks} onUpdate={updateTask} onDelete={removeTask} />
    </div>
  );
}
