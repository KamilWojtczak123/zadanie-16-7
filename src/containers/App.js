import React from 'react';
import uuid from 'uuid';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import style from './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'clean room'
                }, {
                    id: 2,
                    text: 'wash the dishes'
                }, {
                    id: 3,
                    text: 'feed my cat'
                }
            ]
        };
    }
    
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    add(event) {
        event.preventDefault();
        const inputEl = event.target.querySelector('input');
        const value = inputEl.value;

        this.addTodo(value);
        inputEl.value = '';
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="Moja aplikacja Todo" quantity={this.state.data.length} />
                <TodoForm add={this.add.bind(this)} />
                <TodoList tasks={this.state.data} remove={this.removeTodo.bind(this)} />
            </div>
        );
    }
}

export default App;
