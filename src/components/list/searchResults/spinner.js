import React from 'react';
import '../css/spinner.css';

/**
 * just a spinner to show while waiting for data
 * @param {props} props
 * @return {ReactComponent}
 */
export function Spinner(props) {
    return (
        <div className='spinner'>
            Waiting for the data to load
            <div className='loader'>
                </div>
        </div>
    )
}