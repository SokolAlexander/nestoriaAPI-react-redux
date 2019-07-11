import React from 'react';

export function Form(props) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit();
            }}>
            <input type="text" 
                placeholder="search" 
                value={props.value} 
                onChange={(e) => {props.onInputChange(e.target.value)}}/>
            <input type="submit" />
            </form>
    )
}