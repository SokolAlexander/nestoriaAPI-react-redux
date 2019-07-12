import React from 'react';
import {Item} from './item';
import {ShowMoreButton} from './showMoreButton';

export function ListItems(props) {
    if (!props.data.length) return null;
    function getItems() {
        return props.data.map((item, index) => {
            return (
            <Item key={index} data={item} index={index}/>
            )
        })
    }

    return (
        <>
        {getItems()}
        <ShowMoreButton onShowMoreClick={props.onShowMoreClick}/>
        </>
    )
}