import React from 'react';
import ReactDOM from 'react-dom';

import './app-header.css';

const AppHeader = ({doneCount, todoCount}) => {

    

    return (
        <div className="app-header">
            <h1 className="title">Todo App</h1>
            <span>{todoCount} more to do, {doneCount} done</span>
        </div>
    )
};

export default AppHeader;