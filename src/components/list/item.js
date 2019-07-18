import React from 'react';
import {Link} from 'react-router-dom';
import {Thumb} from './thumb';
import {FavCtrl} from '../favCtrl';
import './css/item.css';
import {ItemHeader} from './itemHeader';

/**
 * renders one item of data
 * @param {props} props 
 * @return {ReactComponent}
 */
export function Item(props) {
    const favCtrlClassName = props.data.indexInFavs + 1 ?
        'remove' : 'add';
    return (
        <div className="item-wrapper">
            <Link to={'/info/'} onClick={() => props.handleItemClick(props.data.id)}>
            <ItemHeader title={props.data.title} price={props.data.price_formatted} />
            <Thumb src={props.data.thumb_url}/>
            <div className="item-content">
                {props.data.summary}
            </div>
            </Link>
            <FavCtrl favCtrlClassName={favCtrlClassName}
                onFavClick={() => props.onFavClick(props.data.id)}/>

            </div>
    )
}