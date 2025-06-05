import { NavLink } from 'react-router-dom';
import './TaskDetailComponent.css';

const TaskDetailComponent = ({ task }: { task: { title: string; description: string } }) => {
    return (
        <div className="task-detail">
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <NavLink to="/">Retour à la liste des tâches</NavLink>
        </div>
    );
};

export default TaskDetailComponent;
