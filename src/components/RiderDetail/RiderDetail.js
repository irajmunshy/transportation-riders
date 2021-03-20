import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './RiderDetail.css';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import FakeData from '../FakeData/data.json';
import RiderInfo from '../RiderInfo/RiderInfo';

const RiderDetail = () => {
    const {name} = useParams();
    const [rider, setRider] = useState({});
    const {from, to} = rider;

    useEffect(() => {
        const dataInfo = FakeData.find(data => data.name === name);
        setRider(dataInfo);
    }, [])
    
    const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A'
    });

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
                        <div>
                            <label htmlFor="">Pick From</label><br/>
                            <input id="from" type="text" required className="form-control mb-3"/>
                        </div>
                        <div>
                            <label htmlFor="">Pick To</label><br/>
                            <input id="to" type="text" required className="form-control mb-3"/>
                        </div>
                        <button className="btn w-100 btn-primary">Search</button>
                    </form>
                }
                </div>

                <div className="map col-md-9">
                    <Map
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: '80vh' 
                        }}
                        >
                        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                        </Layer>
                    </Map>
                </div>
            </div>
        </div>
    );
};

export default RiderDetail;