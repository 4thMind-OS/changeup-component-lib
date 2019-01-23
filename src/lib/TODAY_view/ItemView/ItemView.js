import React from 'react'
import './ItemView.css'

const ItemView = (props) => {
    return (
        <div className="ItemView">
            <h1>This is item {props.number}</h1>
            <div>here is a description</div>
        </div>
        
    )
}

export default ItemView