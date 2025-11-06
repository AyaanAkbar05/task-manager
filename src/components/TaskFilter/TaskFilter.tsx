import React, { useState } from 'react';
import type { TaskFilterProps, TaskStatus } from '../../types';

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  const [status, setStatus] = useState<TaskStatus | ''>('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high' | ''>('');

  const handleChange = (newStatus: TaskStatus | '', newPriority: 'low' | 'medium' | 'high' | '') => {
    onFilterChange({
      status: newStatus || undefined,
      priority: newPriority || undefined,
    });
  };

  return (
    <div className="flex gap-4 mb-6">
      <div>
        <label className="block mb-1 font-medium">Status</label>
        <select
          className="border rounded px-2 py-1"
          value={status}
          onChange={(e) => {
            const newStatus = e.target.value as TaskStatus | '';
            setStatus(newStatus);
            handleChange(newStatus, priority);
          }}
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Priority</label>
        <select
          className="border rounded px-2 py-1"
          value={priority}
          onChange={(e) => {
            const newPriority = e.target.value as 'low' | 'medium' | 'high' | '';
            setPriority(newPriority);
            handleChange(status, newPriority);
          }}
        >
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;
