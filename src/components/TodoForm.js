import React from 'react';

const TodoForm = props => (
    <form onSubmit={props.add}>
        <div>
            <label>Task:</label>
            <input />            
        </div>
        <button>Add</button>
    </form>
);

export default TodoForm;
