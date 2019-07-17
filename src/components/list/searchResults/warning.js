import React from 'react';
import '../css/warning.css';

/**
 * render a warning when something's gone wrong
 * @param {props} props
 * @return {ReactComponent}
 */
export function Warning(props) {
    return (
        <div className='warning'>{props.text}
            </div>
    )
}