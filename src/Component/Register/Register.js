import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png'


const Register = () => {
    const [eventInfo, setEventInfo] = useContext(UserContext);
    const { name, email } = eventInfo
    const { eventName } = useParams()



    const history = useHistory();
    const handleRegistration = (e) => {
        e.preventDefault()
        const date = document.getElementById('date').value;
        const description = document.getElementById('description').value;
        const event = document.getElementById('eventName').value;
        const newEventInfo = { ...eventInfo, "date": date, "description": description, "event": event }

        setEventInfo(newEventInfo)

        fetch('https://afternoon-ravine-00878.herokuapp.com/registration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventInfo)

        })
    }

    return (
        < >
            <nav className="navbar navbar-light bg-transparent">
                <span className="mr-auto ml-auto navbar-brand mb-0 h1"> <img style={{
                    padding: '20px',
                    height: '100px'

                }} src={logo} alt="Logo" /> </span>
            </nav>
            <div className="card">
                <div className="form ">
                    <h3 className="text-left">Register as an Volunteer</h3>
                    <div className="card-body px-lg-5 pt-0">
                        <form style={{ color: '#757575' }} onSubmit={handleRegistration}>
                            <div className="form-row">
                                <div className="col">
                                    <div className="md-form">
                                        <input id="fullName" name="name" type="text" defaultValue={name} placeholder='Full Name' className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="md-form">

                                        <input id="email" type="email" name="email" defaultValue={email} placeholder='Email' className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="md-form">

                                        <input id="date" name="date" type="date" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="md-form">

                                        <input id='description' name="description" type="text" placeholder='Description' className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <div className="md-form">

                                        <input id="eventName" name="eventName" type="text" defaultValue={eventName} placeholder='Organize books at the library.' className="form-control" />
                                    </div>
                                </div>
                            </div>


                            <button className="btn btn-primary btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Registration</button>



                            <hr />


                        </form>


                    </div>

                </div>


            </div>


        </>
    );
};

export default Register;