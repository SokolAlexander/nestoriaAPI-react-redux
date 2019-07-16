import React from 'react';
import {Link} from 'react-router-dom';
import {Thumb} from './thumb';
import {FavCtrl} from './favCtrl';
import './css/item.css';

export function Item(props) {
    const path = props.pathname.slice(1) || '';
    const favCtrlClassName = props.data.indexInFavs + 1 || props.data.indexInData + 1 ?
        'remove' : 'add';
    return (
        <div className="item-wrapper">
            <Link to={`/info/${props.data.indexInData + 1 ?
                props.data.indexInData :
                props.index}`}>
            <header className="list-item-header">
                <div className="list-item-title">{props.data.title}</div>
                <div className="list-item-price">{props.data.price_formatted}</div>
            </header>
            <Thumb src={props.data.thumb_url}/>
            <div className="item-content">
                {props.data.summary}
            </div>
            </Link>
            <FavCtrl favCtrlClassName={favCtrlClassName} onFavClick={() => props.onFavClick(props.data.id)}/>
            
            </div>
    )
}