import  {List} from './list';
import {connect} from 'react-redux';
import {toggleFavourites, addItemInfo} from '../../store/actions';

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