import React from 'react'
import './Card.css';

function Card(props) {
    return (
        <div className='card'>
            <div>
            {props.text}
            </div>
            {props.children}
        </div>
    )
}

export default Card
