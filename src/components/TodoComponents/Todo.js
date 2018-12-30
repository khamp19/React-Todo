// create interaction with todo- mark complete

import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            complete: false,
            textChange: {
                textDecoration: "none"
            }
        }
    }

    //toggle complete
    toggleComplete = (e) => {
        if (this.state.complete === false) {
            this.setState ({
                complete: true,
                textChange: {
                    textDecoration: "line-through"
                }
            })
        } else {
            this.setState({
                complete: false,
                textChange: {
                    textDecoration: "none"
                }
            })
        }
    }

    render() {
       return (
            <div 
            onClick={this.toggleComplete} 
            style={this.state.textChange}>
                {this.props.todo}
            </div>
        )
    }
}

export default Todo;