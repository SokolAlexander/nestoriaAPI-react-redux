import React from 'react';
import '../css/warning.css';

export function Warning(props) {
    return (
        <div className='warning' 
            onClick={(e) => {
                e.target.classList.add('warning-hidden')
                }}>{props.text}
            </div>
    )
}