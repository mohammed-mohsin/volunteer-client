import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
// import images from '../../../images/images/babySit.png'

const ClientEvent = () => {
    const [eventInfo, setEventInfo] = useContext(UserContext);
    const [clientData, setClientData] = useState({})
    // console.log(eventInfo.email)

    https://afternoon-ravine-00878.herokuapp.com

    useEffect(() => {
        fetch('https://afternoon-ravine-00878.herokuapp.com/registration')
            .then(res => res.json())
            .then(data => setClientData(data))

    }, [])
    console.log(clientData)


    useEffect(() => {
        fetch('https://afternoon-ravine-00878.herokuapp.com/registration?email=' + eventInfo.email)
            .then(res => res.json())
            .then(data => setClientData(data))
    }, [])
    console.log(clientData)





    return (
        <>
            <div className="col-md-6">

                <div style={{
                    height: '219px',
                    width: '570px'
                }} className="card ">
                    <div className="row">
                        <div className="col-md-6">
                            {/* <img style={{width: '100%', height: '219px'}}  alt="sda" /> */}
                        </div>
                        <div className="col-md-6">
            <h3 className="pt-3">{clientData.event}</h3>
                            <h5 className="pt-3">{clientData.date}</h5>
                            <button style={{
                                marginTop: "50px",
                                marginLeft: "170px"
                            }} className="btn btn-primary">Cencel</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default ClientEvent;