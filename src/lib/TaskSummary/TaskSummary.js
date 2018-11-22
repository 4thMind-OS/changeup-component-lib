import React from 'react'
import './TaskSummary.css'

const TaskSummary = (props) => {
    return (
        <div className="TaskSummary">
            {props.children}
        </div>
    )
}

export default TaskSummary