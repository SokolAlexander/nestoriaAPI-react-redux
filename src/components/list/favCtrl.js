import React from 'react';

export function FavCtrl(props) {
    return (
        <div className='toggle-fav' onClick={props.onFavClick}>
                <div className={props.favCtrlClassName + ' fav-ctrl'}>
                    </div>
                </div>
    )
}