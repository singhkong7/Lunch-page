import React from 'react'
import "./Side.scss";
function Side() {
    return (
        <div className="side">
            <h1>Lorem Ipsum</h1>
            <h3 style={{textDecoration:' line-through',textDecorationColor:'red'}}>About</h3>
            <h3>Services</h3>
            <h3>Cuisine</h3>
            <h3>Gallery</h3>
            <h3>Contact</h3>
            <h3>Book</h3>
            <button type="submit">Cart</button>
        </div>
    )
}

export default Side;
