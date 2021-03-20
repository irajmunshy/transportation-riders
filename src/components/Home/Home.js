import React, { useEffect, useState } from 'react';
import './Home.css';
import FakeData from '../FakeData/data.json';
import Rider from '../rider/Rider';

const Home = () => {
    const [riders, setRiders] = useState([]);

    useEffect(() => {
        setRiders(FakeData);
    }, []);

    return (
        <div className="riders-container">
            <div className="container">
                <div className="riders">
                    {
                        riders.map(rider => <Rider rider={rider}></Rider>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;