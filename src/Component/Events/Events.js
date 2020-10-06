import React from 'react';
import Event from '../Event/Event';

const Events = ({events}) => {
    console.log("events",events)


    return (
        <>
            <div className="container">
                <div className="row">


                    {
                    events.map(event => <Event 
                        key={events._id}
                        event={event} />
                        )
                    }







                </div>
            </div>

        </>
    );
};

export default Events;