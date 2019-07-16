import React from 'react';
import {Item} from './item';


export function ListItems(props) {
    function getItems() {
        console.log(props);
        return props.data.map((item, index) => {
            return (
            <Item key={index} 
                data={item} 
                index={index} 
                pathname={props.pathname}
                onFavClick={props.onFavClick}
                handleItemClick={props.handleItemClick}/>
            )
        })
    }

    return (
        <div className="list-items-wrapper">
        {getItems()}
        </div>
    )
}