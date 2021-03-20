import React from 'react';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Output = (props) => {
    const {img, name, capacity, price} = props.rider;
    const Length = [0, 0, 0];

    return (
        <div>
            <div className="output">
                <img src={img} alt=""/>
                <div className="info">
                    <span>{name}</span>
                    <span><FontAwesomeIcon icon={faUserFriends} /> {capacity}</span>
                </div>
                <span>${price}</span>
            </div>
            <div className="output">
                <img src={img} alt=""/>
                <div className="info">
                    <span>{name}</span>
                    <span><FontAwesomeIcon icon={faUserFriends} /> {capacity}</span>
                </div>
                <span>${price}</span>
            </div>
            <div className="output">
                <img src={img} alt=""/>
                <div className="info">
                    <span>{name}</span>
                    <span><FontAwesomeIcon icon={faUserFriends} /> {capacity}</span>
                </div>
                <span>${price}</span>
            </div>
        </div>
    );
};

export default Output;