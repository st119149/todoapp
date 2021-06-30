import React from 'react';
import ReactDOM from 'react-dom';

import './search-panel.css';

class SearchPanel extends React.Component {
    
    state = {
        term: ''
    }

    render() {
        return (
            <input 
            className="search-panel" placeholder="search"
            onChange={e => {
                this.setState({
                    term: e.target.value
                })
                this.props.onSearchChange(e.target.value);
            }}
            value={this.state.term}
            />
        )
    }
    
}

export default SearchPanel;