import React from 'react';
import {Item} from './item';

export function ListItems(props) {
    if (!props.data.length) return null;
    return (
        props.data.map((item, index) => {
            return (
            <Item key={index} data={item} index={index}/>
            )
        } 
    ))
}