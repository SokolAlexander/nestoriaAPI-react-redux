import React from 'react';

export function ItemHeader(props) {
    return (
        <header className="item-header">
                <div className="item-title">{props.title}</div>
                <div className="item-price">{props.price}</div>
            </header>
    )
}