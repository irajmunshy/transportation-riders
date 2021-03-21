import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import './Header.css';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name, email, isLoggedIn} = loggedInUser;

    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <div class="w-100 d-flex justify-content-between custom-navbar">
                    <div>
                        <Link class="navbar-brand" to="/home">Transportation Riders</Link>
                    </div>
                    <div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link to="/home" class="nav-link">Home</Link>
                                <Link to="/rider/BIKE" class="nav-link">Destination</Link>
                                {(isLoggedIn && email) ? 
                                        <Link to="/userInfo" class="nav-link" id="custom-link">{name || email.slice(0, -10)}</Link>
                                    :
                                        <Link to="/login" class="nav-link" id="custom-link">Log in</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        
    );
};

export default Header;