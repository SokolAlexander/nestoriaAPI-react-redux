import React from 'react';
import './css/favCtrl.css';

/**
 * render a div to add an item to/remove an item from favourites
 * @param {props} props 
 * @return {ReactComponent}
 */
export function FavCtrl(props) {
    return (
        <div className='toggle-fav' onClick={props.onFavClick}>
                <div className={props.favCtrlClassName + ' fav-ctrl'}>
                    </div>
                </div>
    )
}