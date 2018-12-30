// `<TodoList />` receives your Todos array and iterates over 
  //  the list generating a new `<Todo />` for each element in the array.
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// <li key={i}><Todo todo={todo} /></li>
// <li key={i}>{todo}</li>

import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    // you will need a place to store your state in this component.
    constructor(props) {
        super(props);
        this.state = {
            newTodo: "",
            todoList: ["do your homework"]
        }
    }

    // handle input changes
    inputTodo = (e) => {
        this.setState({
            newTodo: e.target.value
        });
    }

    // add new todo on submit, prevent page reload
    addTodo = (e) => {
        e.preventDefault();
        const newTodo = this.state.newTodo;
        const todoListArray = this.state.todoList;
        todoListArray.push(newTodo);
        this.setState({
            newTodo: "",
            todoList: todoListArray
        })
    }

    // clear completed
    clearComplete = (e) => {
        console.log('clicked completed')
    }

  render() {
      return (
            <div>
                <div className="todolist">
                    <ul>
                    {this.state.todoList.map( (todo, i)=> {
                        return <li key={i}><Todo todo={todo} /></li>
                    })}
                    </ul>
                </div>
                <div className="inputForm">
                    <form onSubmit={this.addTodo}>
                    <input
                    type="text"
                    value={this.state.newTodo}
                    onChange={this.inputTodo} />
                    </form>
                </div>
                <div className="clear">
                    <button onClick={this.clearComplete}>
                        Clear completed
                    </button>
                </div>
            </div>
        )
    }
}
export default TodoList;