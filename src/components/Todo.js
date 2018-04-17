import React from 'react';

const Todo = props => (
    <li onClick={() => props.remove(props.task.id)}>{props.task.text}</li>   
);

export default Todo;
