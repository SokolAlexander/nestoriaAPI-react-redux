import {List} from './list';
import {connect} from 'react-redux';
import {requestNextPage, toggleFavourites, addItemInfo} from '../../store/actions';
import {ShowMoreButton} from './searchResults/showMoreButton';
import React from 'react';

/**
 * render a list of search res with showMoreButton
 * @param {props} props
 * @return {ReactComponent}
 */
function SearchResults(props) {
    return (
        <>
        <List {...props} />
        {!props.isFetchingData && props.data[0] &&
                    <ShowMoreButton
                    onShowMoreClick={props.onShowMoreClick}
                    isOnLastPage={props.isOnLastPage}/>}

        </>
    )
}

/**
 * translates redux state data to data props
 * @param {ReduxState} state
 * @return {Object}
 */
const mapStateToProps = function(state) {
    return {
        data: state.data,
        isFetchingData: state.isFetching,
        error: state.error,
        isOnLastPage: state.isOnLastPage
    }
}

const mapDispatchToProps = {
    onShowMoreClick: requestNextPage,
    onFavClick: toggleFavourites,
    handleItemClick: addItemInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);