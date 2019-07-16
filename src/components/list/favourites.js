import  {List} from './list';
import {connect} from 'react-redux';
import {toggleFavourites} from '../../store/actions';

const mapStateToProps = (state) => {
    return {
        data: state.favourites,
    }
}

const mapDispatchToProps = {
    onFavClick: toggleFavourites
}

export default connect(mapStateToProps, mapDispatchToProps)(List)