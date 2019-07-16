import Info from './info';
import {connect} from 'react-redux';
import {toggleFavourites} from '../../store/actions';

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

const  mapDispatchToProps = {
    onFavClick: toggleFavourites
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);