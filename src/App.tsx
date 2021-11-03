import React, {FC, useState, ChangeEvent} from 'react';
import {ITask} from "./interfaces/Interfaces";
import TodoTask from "./Components/TodoTask";


const App: FC = () => {

    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todo, setTodo] = useState<ITask[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "task") {
            setTask(e.target.value);
        } else {
            setDeadline(Number(e.target.value));
        }
    }

    const addTask = (): void => {
        const newTask = {taskName: task, deadline: deadline}
        setTodo([...todo, newTask]);
        setDeadline(0);
        setTask("");
    }

    const completeTask = (taskNameToDelete: string): void => {
        return setTodo(todo.filter(item => item.taskName !== taskNameToDelete))
    }


    return (
        <div className="App">
            <div className="header">
                <input type="text" placeholder="Task..." onChange={handleChange} name="task" value={task}/>
                <input type="text" placeholder="Deadline in days" onChange={handleChange} name="deadline"
                       value={deadline}/>
                <button onClick={addTask}>Add Task</button>
            </div>

            <div className="todoList">
                {todo.map((item: ITask, key: number) => {
                    return <TodoTask key={key} task={item} completeTask={completeTask}/>
                })}
            </div>

        </div>
    );
}

export default App;
