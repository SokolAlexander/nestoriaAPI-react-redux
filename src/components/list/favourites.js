import  {List} from './list';
import {connect} from 'react-redux';
import {toggleFavourites, addItemInfo} from '../../store/actions';

/**
 * translates favourites from redux state to data prop
 * @param {ReduxState} state
 * @return {Object}
 */
const mapStateToProps = (state) => {
    return {
        data: state.favourites,
    }
}

const mapDispatchToProps = {
    onFavClick: toggleFavourites,
    handleItemClick: addItemInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(List)