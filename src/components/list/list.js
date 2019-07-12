import React from 'react';
import {ListHeader} from './header';
import {ListItems} from './listItems';
import {Spinner} from './spinner';
import {Warning} from './warning';
import {connect} from 'react-redux';
import { requestNextPage } from '../../store/actions';

class List extends React.Component {
    render() {
        return (
            <div className="list-wrapper" onClick={(e) => this.props.onListClick(e.target)}>
                {this.props.error && !this.props.isFetchingData && //fix this nightmare
                    <Warning text={this.props.error}/>}
                {this.props.isFetchingData && <Spinner />}
                <ListHeader />
                <ListItems data={this.props.data} onShowMoreClick={this.props.onShowMoreClick}/>
                </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        data: state.data,
        isFetchingData: state.isFetching,
        error: state.error,
    }
}

const mapDispatchToProps = {
    onShowMoreClick: requestNextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(List);