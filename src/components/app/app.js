
import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import TodoFilter from '../todo-filter/todo-filer';
import TodoAddForm from '../todo-add-form/todo-add-form';
import './app.css';

class App extends React.Component {

  maxId = 100;

  state = {
    todoData: [
    {id: 1, label: "Create React App", done: false, marked: false},
    {id: 2, label: "Drink tea", done: false, marked: false},
    {id: 3, label: "Take shower", done: false, marked: false},
    ],

    term: '',
    filter: 'all',
  };

  deleteTodo = id => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newTodoData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx+1)
      ]

      return ({
        todoData: newTodoData
      });
    });
  }

  addTodo = label => {
    const newTodo = {
      id: this.maxId++,
      label: label,
    }

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newTodo
      ];

      return {
        todoData: newArr
      }
    });
  }

  toggleProp = (prop, id) => {
    this.setState(({todoData}) => {
      const itemId = todoData.findIndex((el) => el.id === id);
      todoData[itemId][prop] = todoData[itemId][prop] ? false : true;
      const newArr = [
        ...todoData.slice(0, itemId),
        todoData[itemId],
        ...todoData.slice(itemId+1),
      ];

      return {
        todoData: newArr
      };

    });
  }

  search(arr, term) {
    return arr.filter(item => item.label
      .toLowerCase().includes(term.toLowerCase()));
  }

  filter(arr, filter) {
    switch(filter) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter(item => !item.done);
      case 'done':
        return arr.filter(item => item.done)
    }
  }

  onSearchChange = (term) => {
    this.setState({
      term: term,
    });
  }

  onFilterChange = (filter) => {
    this.setState({
      filter: filter
    });
  }


  render() {

    const doneCount = this.state.todoData.filter(el => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;

    const visibleItems = this.filter( this.search(this.state.todoData, this.state.term) , this.state.filter)
    



    return (
      <div className="app">
        <AppHeader doneCount={doneCount} todoCount={todoCount}/>
        <div className='app-options'>
            <SearchPanel onSearchChange={this.onSearchChange}/>
            <TodoFilter filter={this.state.filter} onFilterChange={this.onFilterChange}/>
        </div>
        <TodoList todos={visibleItems} onDeleted={this.deleteTodo} onToggledProp={this.toggleProp}/>
        <TodoAddForm onAdded={this.addTodo}/>
      </div>
      )
  }
};

export default App;