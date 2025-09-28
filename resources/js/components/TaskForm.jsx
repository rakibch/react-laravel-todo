import React, { useState } from 'react';
import api from '../api';

export default function TaskForm({ onCreate }) {
  const [title, setTitle] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      const res = await api.post('/tasks', { title });
      onCreate(res.data);
      setTitle('');
    } catch (err) {
      console.error(err);
      alert('Failed to create task');
    }
  };

  return (
    <form
      onSubmit={submit}
      className="flex gap-3 mb-6"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        className="
          flex-1 rounded-lg border border-gray-300 px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-blue-500
          placeholder-gray-400 text-gray-800
        "
      />
      <button
        type="submit"
        className="
          px-5 py-2 rounded-lg bg-blue-600 text-white
          hover:bg-blue-700 active:bg-blue-800
          transition disabled:opacity-50
        "
        disabled={!title.trim()}
      >
        Add
      </button>
    </form>
  );
}
