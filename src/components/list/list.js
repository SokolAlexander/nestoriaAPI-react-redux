import React from 'react';
import {ListHeader} from './header';
import {ListItems} from './listItems';
import {Spinner} from './spinner';
import {connect} from 'react-redux';

class List extends React.Component {
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
                {this.props.isFetchingData && <Spinner />}
                </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        data: state.data,
        isFetchingData: state.isFetching
    }
}

export default connect(mapStateToProps)(List);