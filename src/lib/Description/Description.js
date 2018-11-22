import React from 'react'
import './Description.css'

const Description = (props) => {
    return (
        <div className="Description">
            <h3>Description</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Description
