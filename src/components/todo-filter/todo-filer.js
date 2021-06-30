import React from 'react';
import ReactDOM from 'react-dom';


import './todo-filter.css';

class TodoFilter extends React.Component {

    state = {
        buttons: [
            {value: 'all', label: 'All'},
            {value: 'active', label: 'Active'},
            {value: 'done', label: 'Done'},

        ],
        filter: 'all'
    }

    onClickFilter = (e) => {
        this.setState({
            filter: e.target.value,
        });

        this.props.onFilterChange(e.target.value);

    }

    render() {

        const buttons = this.state.buttons.map(b => {
            return (
                <button className={b.value === this.props.filter ? 'active' : ''} onClick={this.onClickFilter} value={b.value}>{b.label}</button>
            )
        });

        return (
            <div className='todo-filter'>
                {buttons}
            </div>
        );
    }
}

   

export default TodoFilter;