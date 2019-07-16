import React from 'react';
import {FavCtrl} from '../list/favCtrl';
import {Details} from './details';
import {toggleFavourites} from '../../store/actions';
import {connect} from 'react-redux';

function Info(props) {
    const item = props.data;
    const favCtrlClassName = item.indexInFavs + 1 || item.indexInData + 1 ?
        'remove' : 'add';
    return (
        <div className='info-window'>
            <header>{item.title}   {item.price_formatted}</header>
            <img src={item.img_url} alt={item.title}/>
            <Details item={item}/>
                                <div>
                    <FavCtrl favCtrlClassName={favCtrlClassName}
                        onFavClick={() => {
                            console.log(item.indexInFavs);
                            props.onFavClick(item.id);
                            console.log(item.indexInFavs);}}/>
                    </div>
            </div>
    )
}


const mapStateToProps = (state) => {
    return {
        data: state.infoItem
    }
}

const  mapDispatchToProps = {
    onFavClick: toggleFavourites
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);