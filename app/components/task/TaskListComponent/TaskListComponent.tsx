import { NavLink } from 'react-router-dom';
import './TaskListComponent.css';

const TaskListComponent = ({ tasks }: { tasks: { id: number; title: string; description: string }[] }) => {
    return (
        <div className="task-list">
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

export default TaskListComponent;
