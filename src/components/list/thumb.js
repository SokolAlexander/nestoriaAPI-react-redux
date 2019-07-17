import React from 'react';

/**
 * render a thumb img
 * @param {props} props
 * @return {ReactComponent}
 */
export function Thumb(props) {
    return (
        <img src={props.src} alt="thumb" className="thumb"></img>
    )
}