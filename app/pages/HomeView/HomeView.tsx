// app/pages/HomeView/HomeView.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeView.css';

const tasks = [
  { id: 1, title: 'Tâche 1', description: 'Description de la tâche 1' },
  { id: 2, title: 'Tâche 2', description: 'Description de la tâche 2' },
  { id: 3, title: 'Tâche 3', description: 'Description de la tâche 3' },
];

const HomeView = () => {
  return (
    <div className="task-list">
      <h1>Liste des Tâches</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <NavLink to={`/tasks/${task.id}`}>{task.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeView;
