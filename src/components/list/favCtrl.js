import React from 'react';

export function FavCtrl(props) {
    return (
        <div className='toggle-fav' onClick={props.onFavClick}>
                <div className={props.favCtrlClassName + ' fav-ctrl'} 
                    onClick={(e) => {
                        //e.target.classList.toggle('transformed')
                        }}>
                    </div>
                </div>
    )
}