import {List} from './list';
import {connect} from 'react-redux';
import {requestNextPage, toggleFavourites, addItemInfo} from '../../store/actions';
import {ShowMoreButton} from './searchResults/showMoreButton';
import React from 'react';

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