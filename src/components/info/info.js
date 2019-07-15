import React from 'react';

export default function Info(props) {
    const item = props.data[props.match.params.index];
    return (
        <div className='info-window'>
            <header>{item.title}   {item.price_formatted}</header>
            <img src={item.img_url} alt='image'/>
                <div>
                    {item.summary}
                    </div>
                <div>
                    <a href={item.lister_url}>More Info</a>
                    </div>
            </div>
    )
}