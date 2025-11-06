import React, { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import type { Task, TaskStatus } from './types';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    status: 'pending',
    priority: 'low',
    dueDate: '2023-12-31',
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description 2',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2024-01-01',
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Description 3',
    status: 'completed',
    priority: 'high',
    dueDate: '2024-01-02',
  },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filters, setFilters] = useState<{ status?: TaskStatus; priority?: string }>({});

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task))
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleFilterChange = (newFilters: { status?: TaskStatus; priority?: string }) => {
    setFilters(newFilters);
  };

  const filteredTasks = tasks.filter((task) => {
    const statusMatch = filters.status ? task.status === filters.status : true;
    const priorityMatch = filters.priority ? task.priority === filters.priority : true;
    return statusMatch && priorityMatch;
  });

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Manager</h1>
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList tasks={filteredTasks} onStatusChange={handleStatusChange} onDelete={handleDelete} />
    </div>
  );
};

export default App;
