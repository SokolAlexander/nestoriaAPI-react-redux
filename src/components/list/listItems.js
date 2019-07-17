import React from 'react';
import {Item} from './item';

/**
 * render list of items
 * @param {props} props
 * @return {ReactComponent}
 */
export function ListItems(props) {
    /**
     * maps an array of items
     * @return {ReactComponent}
     */
    function getItems() {
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