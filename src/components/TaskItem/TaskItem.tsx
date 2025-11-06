import React from 'react';
import type { TaskItemProps } from '../../types';

const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange, onDelete }) => {
  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 border-yellow-400',
    'in-progress': 'bg-blue-100 border-blue-400',
    completed: 'bg-green-100 border-green-400',
  };

  return (
    <div
      className={`border p-4 rounded-lg shadow-sm mb-3 ${statusColors[task.status]} hover:shadow-md transition`}
    >
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-gray-700 mb-2">{task.description}</p>

      <div className="flex justify-between items-center text-sm">
        <div>
          <p className="font-medium">
            Priority: <span className="capitalize">{task.priority}</span>
          </p>
          <p>Due: {task.dueDate}</p>
        </div>

        <div className="flex gap-2">
          <select
            className="border rounded px-2 py-1 text-sm"
            value={task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value as any)}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <button
            onClick={() => onDelete(task.id)}
            className="text-red-600 border border-red-600 px-2 py-1 rounded hover:bg-red-600 hover:text-white transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
