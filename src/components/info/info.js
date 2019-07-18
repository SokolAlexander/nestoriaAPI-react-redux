import React from 'react';
import {FavCtrl} from '../favCtrl';
import {Details} from './details';
import {ItemHeader} from '../list/itemHeader';
import {toggleFavourites} from '../../store/actions';
import {connect} from 'react-redux';
import './info.css';

/**
 * renders info window
 * @param {props} props 
 * @return {ReactComponent}
 */
function Info(props) {
    const item = props.data;
    const favCtrlClassName = item.indexInFavs + 1 ?
        'remove' : 'add';
    return (
        <div className='info-window'>
            <ItemHeader title={item.title} price={item.price_formatted} />
            <img src={item.img_url} alt={item.title}/>
            <Details item={item}/>
                                <div>
                    <FavCtrl favCtrlClassName={favCtrlClassName}
                        onFavClick={() => {
                            props.onFavClick(item.id);
                            console.log(item.indexInFavs);}}/>
                    </div>
            </div>
    )
}

/**
 * translates redux state to props
 * @param {ReduxState} state
 * @return {Object}
 */
const mapStateToProps = (state) => {
    return {
        data: state.infoItem
    }
}

const  mapDispatchToProps = {
    onFavClick: toggleFavourites
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);