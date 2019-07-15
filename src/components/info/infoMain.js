import Info from './info';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

const  mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Info);