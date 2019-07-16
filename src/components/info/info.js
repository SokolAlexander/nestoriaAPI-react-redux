import React from 'react';
import {FavCtrl} from '../list/favCtrl';

export default function Info(props) {
    const item = props.data[props.match.params.index];
    const favCtrlClassName = item.indexInFavs + 1 || item.indexInData + 1 ?
        'remove' : 'add';
    return (
        <div className='info-window'>
            <header>{item.title}   {item.price_formatted}</header>
            <img src={item.img_url} alt={item.title}/>
                <div className="details">
                    <div className="keywords">
                        {item.keywords}
                    </div>
                    <ul>
                        <li>Bathrooms: {item.bathroom_number}</li>
                        <li>Bedrooms: {item.bedroom_number}</li>
                    </ul>
                    <div className="lister">
                        Sent by <a 
                            href={item.lister_url}>{item.lister_name || 'somebody'}
                            </a> 
                    </div>
                </div>
                <div>
                    {item.summary}
                    </div>
                <div>
                    <FavCtrl favCtrlClassName={favCtrlClassName}
                        onFavClick={() => props.onFavClick(item.id)}/>
                    </div>
            </div>
    )
}