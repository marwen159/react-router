import React from 'react'
import Rate from './rate';
import  './card.css';
const moviecard = ({movies:{title,rate,image}}) => {
    return (
        <div className="containe">
           <h1>{title}</h1>
           <Rate rating={rate}/>
           <img src={image} />
        </div>
    )
}

export default moviecard
