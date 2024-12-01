import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../features/tasksSlice';
import '../App.css';

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks, loading } = useSelector((state) => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    if (loading) {
        return <div className="loading">Загрузка...</div>;
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <div key={task.id} className="task-item">
                    <span className={task.completed ? 'completed' : 'not-completed'}>
                        {task.title}
                    </span>
                    <span>{task.completed ? '(Выполнено)' : '(Не выполнено)'}</span>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
