import React from 'react';
import './card.css';

function Card({
    image, 
    username, 
    name, 
    phone,
    email,
    website }) {
    return (
        <div className="card">
            <div className="card_left">
                <img src={image} alt="avatar saya" className="avatar"/>
            </div>

            <div className="card_right">
                <h3 className="username">{username}</h3>
                <p className="biodata">
                    name : {name} <br />
                    <hr />
                    email : {email} <br />
                    <hr />
                    phone : {phone} <br />
                    <hr />
                    website : {website} <br />
                    <hr />
                </p>
            </div>
        </div>
    )
}

export default Card
