import Info from './info';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        data: state.favourites
    }
}

const  mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Info);