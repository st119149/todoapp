import React from 'react';
import ReactDOM from 'react-dom';

import TodoListItem from './todo-list-item';

import './todo-list.css';




const TodoList = ({ todos, onDeleted, onToggledProp }) => {

  const todo = todos.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li className="todo-list-item" key={id}>
        <TodoListItem 
        {...itemProps} 
        onDeleted={() => {onDeleted(id)}} 
        onToggledMark={() => onToggledProp('marked', id)} 
        onToggledDone={() => onToggledProp('done', id)}
        />
      </li>
    );
  });

  return (
    <ul className="todo-list">
      {todo}
    </ul>
  )
};

export default TodoList;