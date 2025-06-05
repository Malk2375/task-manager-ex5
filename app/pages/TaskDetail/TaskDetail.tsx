// src/pages/TaskDetail/TaskDetail.tsx
import { useParams, Link } from "react-router-dom";
import styles from "./TaskDetail.module.css";

const tasks = [
  { id: 1, title: "Tâche 1", description: "Description de la tâche 1" },
  { id: 2, title: "Tâche 2", description: "Description de la tâche 2" },
  { id: 3, title: "Tâche 3", description: "Description de la tâche 3" },
];

const TaskDetail = () => {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === parseInt(id || "", 10));

  if (!task) {
    return (
      <div>
        <h1>Tâche non trouvée</h1>
        <p>La tâche avec cet ID n'existe pas.</p>
        <Link to="/">Retour à la liste des tâches</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <Link to="/">Retour à la liste des tâches</Link>
    </div>
  );
};

export default TaskDetail;
