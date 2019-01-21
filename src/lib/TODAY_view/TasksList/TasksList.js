import React from 'react'
import './TasksList.css'

const TasksList = (props) => {
    return (
        <div className="tasks-list-root">
            <ul>
                <li className="task">{props.tasks[0]}</li>
                <li className="task">{props.tasks[1]}</li>
                <li className="task">{props.tasks[2]}</li>
            </ul>
        </div>
    )
}

export default TasksList