import React, { Component } from 'react'


class Toggle extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return ( 
            <div>hell {this.props.child}</div>
        )
    }
}

export default Toggle;