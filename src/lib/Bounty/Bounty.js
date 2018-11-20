import React from 'react'
import './Bounty.css'

class Bounty extends React.Component {
    render() {
        return <div className="Bounty">{this.props.children}</div>
    } 
}

export default Bounty