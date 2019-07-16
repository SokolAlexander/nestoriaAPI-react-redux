import React from 'react';
import {ListHeader} from './header';
import {ListItems} from './listItems';
import {Spinner} from './searchResults/spinner';
import {Warning} from './searchResults/warning';
import './css/list.css';

export function List(props) {
        return (
            <div className="list-wrapper">
                {props.error && !props.isFetchingData &&
                    <Warning text={props.error}/>}

                {!props.isFetchingData && 
                    <ListHeader />}

                {props.data[0] && 
                    <ListItems data={props.data} 
                    pathname={props.pathname}
                    onFavClick={props.onFavClick}
                    toggleFavClassName={props.toggleFavClassName}/>}

                {props.isFetchingData && 
                    <Spinner />}

                </div>
        )
}