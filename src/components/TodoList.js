import React from 'react';
import Todo from './Todo';

const TodoList = props => (
    <ul>
        {props.tasks.map(task => <Todo key={task.id} task={task} remove={props.remove} />)}
    </ul>
);

export default TodoList;
