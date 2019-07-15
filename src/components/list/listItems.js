import React from 'react';
import {Item} from './item';


export function ListItems(props) {
    function getItems() {
        return props.data.map((item, index) => {
            return (
            <Item key={index} 
                data={item} 
                index={index} 
                pathname={props.pathname}
                onFavClick={props.onFavClick}/>
            )
        })
    }

    return (
        <div className="items-wrapper">
        {getItems()}
        </div>
    )
}