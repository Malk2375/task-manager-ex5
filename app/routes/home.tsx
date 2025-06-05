// src/routes/home.tsx
import { NavLink } from "react-router-dom";
// import styles from "@/pages/Home/Home.module.css";

// Liste statique des tâches
const tasks = [
  { id: 1, title: "Tâche 1", description: "Description de la tâche 1" },
  { id: 2, title: "Tâche 2", description: "Description de la tâche 2" },
  { id: 3, title: "Tâche 3", description: "Description de la tâche 3" },
];

const Home = () => {
  return (
    <div>
      <h1>Liste des Tâches</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <NavLink to={`/tasks/${task.id}`} >
              {task.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
