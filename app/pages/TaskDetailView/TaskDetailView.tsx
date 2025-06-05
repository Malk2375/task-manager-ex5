// app/pages/TaskDetailView/TaskDetailView.tsx
import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './TaskDetailView.css';

const tasks = [
  { id: 1, title: 'Tâche 1', description: 'Description de la tâche 1' },
  { id: 2, title: 'Tâche 2', description: 'Description de la tâche 2' },
  { id: 3, title: 'Tâche 3', description: 'Description de la tâche 3' },
];

const TaskDetailView = () => {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === parseInt(id!));

  return (
    <div className="task-detail">
      {task ? (
        <>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <NavLink to="/">Retour à la liste des tâches</NavLink>
        </>
      ) : (
        <p>Tâche non trouvée</p>
      )}
    </div>
  );
};

export default TaskDetailView;
