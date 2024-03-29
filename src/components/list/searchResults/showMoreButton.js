import React from 'react';
import '../css/showMoreButton.css';

/**
 * renders a button to request next page
 * @param {props} props
 * @return {ReactComponent}
 */
export function ShowMoreButton(props) {
    return (
        <div className="show-more"
            onClick={() => {
                if (!props.isOnLastPage) {
                    props.onShowMoreClick()
                    }
                }}>
            {props.isOnLastPage ? 'That\'s All Folks!' : 'Get more'}
            </div>
    )
};