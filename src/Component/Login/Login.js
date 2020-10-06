import React, { useContext, useEffect } from 'react';
import './Login.css'
import logo from '../../images/logos/logo.png'
import { handleGoogleSignIn, initializeLoginFramework } from './LoginManager';
import { Link, useHistory, useLocation } from 'react-router-dom';

import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';


const Login = () => {
    const [eventInfo, setEventInfo] = useContext(UserContext);


    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                setEventInfo({ ...user, name: user.displayName })
            } else {
                // No user is signed in.
            }
        });
    }, [])

    initializeLoginFramework();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const handleResponse = (res, redirect) => {

        setEventInfo(res);
        if (redirect) {
            history.replace(from);
        }
    }
    return (
        < >


            <nav className="navbar navbar-light bg-transparent">
                <span className="mr-auto ml-auto navbar-brand mb-0 h1"> <Link to='/'><img style={{
                    padding: '20px',
                    height: '100px'

                }} src={logo} alt="Logo" /></Link> </span>
            </nav>

            <div className="form ">

                <img className='g-image' alt="" src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3" />
                <h1 >Login With Google</h1>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />

                <div onClick={googleSignIn} className="google-btn mr-auto ml-auto">
                    <div className="google-icon-wrapper">
                        <img alt="Google" className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                    </div>
                    <p className="btn-text text-dark ml-auto mr-auto text-center"><b>Continue in with google</b></p>
                </div>
                <div className="text-dark mt-5" > Don't have an account<span style={{ cursor: "pointer" }} className="text-primary ">Create account</span> </div>

            </div>


        </>
    );
};

export default Login;