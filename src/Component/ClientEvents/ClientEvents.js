import React from 'react';
import Nav from '../Nav/Nav';
import ClientEvent from '../ClientEvent/ClientEvent';

const ClientEvents = () => {
    return (
        <>
        <Nav/>
        <div className="container">
            <div className="row">
                <ClientEvent/>
            </div>
        </div>
            
        </>
    );
};

export default ClientEvents;