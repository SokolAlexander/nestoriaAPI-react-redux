import React from 'react';
import {Link} from 'react-router-dom';
import {Thumb} from './thumb';

export function Item(props) {
    const path = props.pathname.slice(1) || '';
    return (
        <>
        <Link to={`${path}/info/${props.index}`}>
            <Thumb src={props.data.thumb_url}/>
        <div className="list-item" data-id={props.data.id}>
            <div className="item-content">
            {props.data.summary}
            </div>
            </div>
            </Link>
            <div className='toggle-fav' onClick={() => props.onFavClick(props.data.id)}>X</div>
            </>
    )
}