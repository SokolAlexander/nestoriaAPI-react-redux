import React from 'react';
import {Link} from 'react-router-dom';
import {Thumb} from './thumb';
import './css/item.css';

export function Item(props) {
    const path = props.pathname.slice(1) || '';
    console.log(props.toggleFavClassName)
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
            <div className='toggle-fav' onClick={() => props.onFavClick(props.data.id, props.index)}>
                <div className={props.toggleFavClassName} onClick={(e) => {
                    e.target.classList.toggle('transform-plus')}}>
                    </div>
                </div>
            </div>
    )
}