import React, { useState } from 'react';
import api from '../api';

export default function TaskItem({ task, onUpdate, onDelete }) {
  const [loading, setLoading] = useState(false);

  const toggle = async () => {
    setLoading(true);
    try {
      const res = await api.patch(`/tasks/${task.id}`, { completed: !task.completed });
      onUpdate(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const remove = async () => {
    if (!confirm('Delete task?')) return;
    try {
      await api.delete(`/tasks/${task.id}`);
      onDelete(task.id);
    } catch (err) {
      console.error(err);
    }
  };

  const edit = async () => {
    const newTitle = prompt('Edit title', task.title);
    if (newTitle === null || newTitle.trim() === '') return;
    try {
      const res = await api.patch(`/tasks/${task.id}`, { title: newTitle });
      onUpdate(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <li
      className="
        flex items-center gap-3 px-4 py-3
        border-b border-gray-200
        hover:bg-gray-50 transition-colors
      "
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggle}
        disabled={loading}
        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
      />

      {/* Task title */}
      <div
        className={`
          flex-1 text-gray-800
          ${task.completed ? 'line-through text-gray-400' : ''}
        `}
      >
        {task.title}
      </div>

      {/* Action buttons */}
      <button
        onClick={edit}
        className="
          text-sm px-3 py-1 rounded-lg
          bg-yellow-100 text-yellow-700
          hover:bg-yellow-200 transition
        "
      >
        Edit
      </button>

      <button
        onClick={remove}
        className="
          text-sm px-3 py-1 rounded-lg
          bg-red-100 text-red-700
          hover:bg-red-200 transition
        "
      >
        Delete
      </button>
    </li>
  );
}
