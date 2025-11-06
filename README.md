# Reflection Questions

1. Ensuring unique keys:
Each task object includes a unique id property, which was used as the React key when rendering the list. This ensures stable identity for each task and prevents rendering issues when tasks are updated or removed.

2. Filtering considerations:
Filtering was implemented based on both status and priority. The logic checks if a filter is selected and matches it against each task; if not, it simply includes all tasks. This keeps the filtering simple, efficient, and easy to extend later.

3. Handling state updates:
When a task’s status changes, the component updates the task list state immutably using map()-creating a new array where only the matching task’s status is updated. This approach preserves React’s state immutability and triggers proper re-rendering.

4. Conditional rendering challenges:
The main challenge was keeping the UI consistent when no tasks matched the filters. This was solved by conditionally rendering a simple “No tasks found” message whenever the filtered list was empty.


 # Task Management App

A simple React + TypeScript application that manages and filters a list of tasks.
It demonstrates dynamic list rendering, conditional rendering, key usage, and component composition using Tailwind CSS for styling.

# Setup
npm install
npm run dev


Then open the app in your browser at the URL shown in the terminal.

# Components Overview
1. TaskList

Renders a list of tasks using unique keys (task.id).

Receives props for tasks, status changes, and deletion.

Uses conditional rendering to show a message if no tasks exist.

2. TaskItem

Displays details for an individual task.

Allows users to change task status or delete a task.

Applies different visual styles based on task status and priority.

3. TaskFilter

Provides dropdowns to filter tasks by status and priority.

Calls onFilterChange whenever filters are updated.

How It Works

App.tsx holds the main task state and filter state.

Filters are passed to TaskList after being updated by TaskFilter.

Tasks are updated or deleted through callbacks from TaskItem.

# Styling

All components use Tailwind CSS for clean, responsive styling.




This project focuses only on the required functionality — no extra features, just clear and modular React components.
