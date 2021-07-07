import React from 'react';
import "./Card.scss";
function Card({image,title}) {
    return (
        
            <div className="card">
                <img src={image} alt=" " />
                <h3>{title} </h3>
            </div>

    )
}

export default Card
