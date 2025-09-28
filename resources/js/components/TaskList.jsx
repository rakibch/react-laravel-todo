import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onUpdate, onDelete }) {
  if (tasks.length === 0)
    return (
      <p className="text-center text-gray-500 italic mt-4">
        No tasks yet.
      </p>
    );

  return (
    <ul className="divide-y divide-gray-200 bg-white rounded-lg shadow">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
