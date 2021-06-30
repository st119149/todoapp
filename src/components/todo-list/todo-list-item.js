import React from 'react';
import ReactDOM from 'react-dom';

class TodoListItem extends React.Component {

    render() {
        const { label, done, marked, onDeleted, onToggledDone, onToggledMark } = this.props;
        let classNames = '';
        if (done)
            classNames += 'done ';
        if (marked)
            classNames += 'marked ';


        return (<div>
            <span
                className={classNames}
                onClick={onToggledDone} 
                >{label}</span>

            <div>
                <button
                onClick={onDeleted}
                >delete</button>

                <button
                    onClick={onToggledMark} >mark</button>
            </div>

        </div>)
    }
}


export default TodoListItem;