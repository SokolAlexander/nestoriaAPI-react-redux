import React from 'react';
import './css/itemHeader.css';

/**
 * render an item header for info window or item list
 * @param {props} props 
 * @return {ReactComponent}
 */
export function ItemHeader(props) {
    return (
        <header className="item-header">
                <div className="item-title">{props.title}</div>
                <div className="item-price">{props.price}</div>
            </header>
    )
}