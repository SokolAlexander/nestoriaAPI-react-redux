import React from 'react';
import '../css/spinner.css';

export function Spinner(props) {
    return (
        <div className='spinner'>
            Waiting for the data to load
            <div className='loader'>
                </div>
        </div>
    )
}