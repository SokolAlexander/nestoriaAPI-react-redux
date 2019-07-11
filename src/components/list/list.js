import React from 'react';
import {ListHeader} from './header';
import {ListItems} from './listItems';

export class List extends React.Component {
    constructor(props) {
        super(props);
    }

    showModal(index) {

    }
    
    render() {
        return (
            <div className="list-wrapper" onClick={(e) => this.props.onListClick(e.target)}>
                <ListHeader />
                <ListItems data={this.props.data}/>
                </div>
        )
    }
}