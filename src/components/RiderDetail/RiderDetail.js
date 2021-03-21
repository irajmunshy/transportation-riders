import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './RiderDetail.css';
import FakeData from '../FakeData/data.json';
import RiderInfo from '../RiderInfo/RiderInfo';
import Map from '../Map/Map';

const RiderDetail = () => {
    const {name} = useParams();
    const [rider, setRider] = useState({});
    const {from, to} = rider;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    useEffect(() => {
        const dataInfo = FakeData.find(data => data.name === name);
        setRider(dataInfo);
    }, [])
    
    const handleSearch = () => {
        const fromValue = document.getElementById('from').value;
        const toValue = document.getElementById('to').value;
        const newData = {...rider};
        newData.from = fromValue;
        newData.to = toValue;
        newData.success = true;
        setRider(newData);
    }

    return (
        <div className="container">
            <div className="row find-area">
                <div className="col-md-3">
                {rider.success ?
                    <div className="exact-location mb-4">
                        <div className="location">
                            <div>
                                <p>{from}</p>
                            </div>
                            <div>
                                <p>{to}</p>
                            </div>
                        </div>

                        <div>
                            <RiderInfo rider={rider}></RiderInfo>
                        </div>
                    </div>
                    :
                    <form onSubmit={handleSearch} className="mb-4 search-area">
                        <p>Current Date: {date}</p>
                        <p>Current Time: {time}</p>
                        <div>
                            <label htmlFor="">Pick From</label><br/>
                            <input id="from" type="text" required className="form-control mb-3"/>
                        </div>
                        <div>
                            <label htmlFor="">Pick To</label><br/>
                            <input id="to" type="text" required className="form-control mb-3"/>
                        </div>
                        <button className="btn w-100 search-btn">Search</button>
                    </form>
                }
                </div>

                <div className="col-md-9">
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default RiderDetail;