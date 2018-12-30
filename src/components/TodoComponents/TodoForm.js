// `<TodoForm>` will hold your input field and your `Add Todo` 
// and `Clear Completed` buttons.
    // Your input field should take in user input, 
    // and allow a user to press`Enter` or click on the
    // `Submit Button` to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render 
// and show the added todo.

import React, { Component } from 'react';



class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: "type todo here"
        }
    }
    
    // handle input changes
    inputTodo = (e) => {
        this.setState({
            newTodo: e.target.value
        });
    }

    // add new todo on submit
    addTodo = (e) => {
        e.preventDefault();
        
    }

    render () {
        return (
            <div>
                <p>here's a form!</p>
                <form onSubmit={this.addTodo}>
                    <input 
                        type="text" 
                        value={this.state.newTodo} 
                        onChange={this.inputTodo} />
                </form>
            </div>
        )
    }
}

export default TodoForm;