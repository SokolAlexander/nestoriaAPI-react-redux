import React from 'react';


export function Details(props) {
    return (
        <>
        <div className="details">
            <div className="keywords">
                {props.item.keywords}
            </div>
            <ul>
                <li>Bathrooms: {props.item.bathroom_number}</li>
                <li>Bedrooms: {props.item.bedroom_number}</li>
            </ul>
            <div className="lister">
                Sent by <a 
                    href={props.item.lister_url}>{props.item.lister_name || 'somebody'}
                    </a> 
            </div>
        </div>
        <div>
                {props.item.summary}
        </div>
        </>
    )
}
