import React from 'react';

export function Item(props) {
    return (
        <li data-index={props.index}>{props.data.summary}</li>
    )
}