import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import './TasksList.css'

class TasksList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="tasks-list-root">
                <ul>
                    <Link to="/taskOne">
                        <li className="task">{this.props.tasks[0]}</li>
                    </Link>
                    <Link to="/taskTwo">
                        <li className="task">{this.props.tasks[1]}</li>
                    </Link>
                    <Link to="/taskThree">
                        <li className="task">{this.props.tasks[2]}</li>
                    </Link>
                </ul>
            </div>
    )}
    
}

export default TasksList