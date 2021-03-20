import React, { useContext } from 'react';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import { Link } from 'react-router-dom';

const UserInfo = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name, email} = loggedInUser;
    console.log(loggedInUser)

    const handleLogOut = () => {
        firebase.auth().signOut()
        .then((res) => {  
            const signOutUser = {
                name: '',
                email: '',
                error: '',
                photo: '',
                password: '',
                confirmPassword: '',
                isLoggedIn: false
            } 
            setLoggedInUser(signOutUser);
        })
        .catch((error) => {
            // An error happened.
        });
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="logOut">
                        <h3>Name: {name}</h3>
                        <h4>Email: {email}</h4>
                        <button className="w-100 form-btn" onClick={handleLogOut}>Log Out</button>
                    </div>
                </div>

                <div className="mt-5 col-md-12 text-center">
                    <h1>Update Coming Soon...</h1>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;