import React from 'react';
import '../css/showMoreButton.css';

export function ShowMoreButton(props) {
    return (
        <div className="show-more" 
            onClick={props.isOnLastPage ? null : props.onShowMoreClick}>
            {props.isOnLastPage ? 'That\'s All Folks!' : 'Get more'}
            </div>
    )
};