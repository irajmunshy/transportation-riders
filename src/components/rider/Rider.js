import React from 'react';
import { useHistory } from 'react-router';
import './Rider.css';

const Rider = (props) => {
    const {img, name} = props.rider;

    const history = useHistory();
    const handleClick = () => {
        history.push(`/rider/${name}`);
    }

    return (
        <div onClick={() => handleClick(name)} className="rider-info">
            <img src={img} alt=""/>
            <h4>{name}</h4>
        </div>
    );
};

export default Rider;