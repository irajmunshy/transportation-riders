import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import './Header.css';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav class="navbar d-flex justify-content-between custom-navbar navbar-expand-lg navbar-light">
                        <div>
                            <Link class="navbar-brand" to="/home">Transportation Riders</Link>
                        </div>

                        <div>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <Link to="/home" class="nav-link">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/rider" class="nav-link">Destination</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/home" class="nav-link">Blog</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/home" class="nav-link">Contact</Link>
                                    </li>
                                    {(loggedInUser.isLoggedIn && loggedInUser.email) ? 
                                        <li className="nav-item">
                                            <Link to="/userInfo" class="nav-link" id="custom-link">{loggedInUser.name ? loggedInUser.name : loggedInUser.email}</Link>
                                        </li>  
                                        :
                                        <li className="nav-item">
                                            <Link to="/login" class="nav-link" id="custom-link">Log in</Link>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        
    );
};

export default Header;