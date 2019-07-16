import React from 'react';
import {Link} from 'react-router-dom';
import {Thumb} from './thumb';
import './css/item.css';

export function Item(props) {
    const path = props.pathname.slice(1) || '';
    const favCtrlClassName = props.data.indexInFavs + 1 || props.data.indexInData + 1 ?
        'remove' : 'add';
    return (
        <div className="item-wrapper">
            <Link to={`${path}/info/${props.index}`}>
            <header className="list-item-header">
                <div className="list-item-title">{props.data.title}</div>
                <div className="list-item-price">{props.data.price_formatted}</div>
            </header>
            <Thumb src={props.data.thumb_url}/>
            <div className="item-content">
                {props.data.summary}
            </div>
            </Link>
            <div className='toggle-fav' onClick={() => props.onFavClick(props.data.id)}>
                <div className={favCtrlClassName + ' fav-ctrl'} 
                    onClick={(e) => {e.target.classList.toggle('fav-ctrl')}}>
                    </div>
                </div>
            </div>
    )
}