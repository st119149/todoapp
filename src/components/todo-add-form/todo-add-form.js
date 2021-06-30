import React from 'react';
import ReactDOM from 'react-dom';

import './todo-add-form.css';

export default class TodoAddForm extends React.Component {


    state = {
        value: ''
    }

    onLabelSubmit = (e) => {
        e.preventDefault();
        const labelValue = this.state.value;
        if (labelValue.length < 3 || labelValue.length > 20)
            return;
        this.props.onAdded(labelValue);
        this.setState({value: ''});
    }

    render() {
        return (
            <form onSubmit={this.onLabelSubmit} className='todo-add-form'>

                <button type="submit">add</button>

                <input type='text'
                onChange={e => {
                    this.setState({
                        value: e.target.value,
                    });
                }}
                value={this.state.value}
                />
            </form>
        );
    }
}