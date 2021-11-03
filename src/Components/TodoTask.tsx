import React from 'react';
import {ITask} from "../interfaces/Interfaces";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete:string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
    return (
        <div>
            task name: {task.taskName} - task deadline in days: {task.deadline}
            <button onClick={() => completeTask(task.taskName)}>complite task</button>
        </div>
    );
};

export default TodoTask;