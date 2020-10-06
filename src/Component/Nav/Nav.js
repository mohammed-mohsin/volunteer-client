import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import Login from '../Login/Login';


const Nav = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container">
                <Link to='/'><img style={{
                    padding: '20px',
                    height: '100px'

                }} src={logo} alt="Logo" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className=" navbar-nav ml-auto ">
                        <li className="nav-item ">
                            <div style={{ color: '#0B0B0B' }} className="nav-link ml-5 " href="#">Home </div>
                        </li>
                        <li className="nav-item">
                            <div style={{ color: '#0B0B0B' }} className="nav-link ml-5 " href="#">Donation</div>
                        </li>
                        <li className="nav-item">
                            <div style={{ color: '#0B0B0B' }} className="nav-link ml-5 " href="#">Events</div>
                        </li>
                        <li className="nav-item">
                            <div style={{ color: '#0B0B0B' }} className="nav-link ml-5 " href="#">Blog</div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <Link to='/login'><button type="button" className="btn btn-primary btn-lg ml-3">Register</button></Link>
                        <Link to='/volunteerRegisterList'><button type="button" className="btn btn-dark btn-lg ml-3">Register</button></Link>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Nav;